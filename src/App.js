import React from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import {element, textToBoardData, screenTest, parsedText} from './customFormat';
import {BoardStorage, envStorage} from './sharedStorage';
import {firebaseConfig} from './firebaseConfig';
firebase.initializeApp (firebaseConfig);
var db = firebase.database();

class Section extends React.Component {
	constructor(props){
		super(props);
		this.focus = this.focus.bind(this);
		this.refSpan= React.createRef();
	}

	focus() {
		this.refSpan.current.focus();
	}
	
	render() {
		return (<span tabIndex="-1" data-focusid={this.props['data-focusid']} ref={this.refSpan}>{this.props.children}</span>);
	}
}

class Board extends React.Component {
	static defaultProps = {autoFocus:true}
	constructor(props) {
		super(props);
		this.childrenRefs = {};
		this.refHead= React.createRef();
	}

	createContent() {
		const items = this.props.content;
		if (!items) return undefined;
		var refs = {};
		function walk (items, lastSection) {
			let children = []
			for (let k in items) {
				k = items[k];
				if (typeof k === "string") {
					children.push(k)
					continue;
				}
				if (!k.t) continue;
				let ref = undefined;
				let focusId = lastSection;
				let e = k.t;
				let c = k.c;
				if (e === "table") c = [new element("tbody", c)];
				else if (e === 'Sec'){
					ref = React.createRef();
					refs[k.id] = ref;
					e = Section;
					focusId = k.id;
				}
				children.push(React.createElement(e, {key: k.id, ref:ref, 'data-focusid':focusId, children: walk(c, focusId)}));
			}
			return children;
		}
		var c = walk(items);
		this.childrenRefs = refs;
		return c;
	}

	setRefFocus(key) {
		this.childrenRefs[key] && this.childrenRefs[key].current.focus();
		envStorage.boards[envStorage.currentBoard].lastFocusId = key;
	}
	
	setLastFocus() {	
		if (this.props.boardData && this.props.boardData.lastFocusId) this.setRefFocus(this.props.boardData.lastFocusId);
		else this.refHead.current.focus();
	}

	componentDidUpdate() {
		if (this.props.autoFocus) this.setLastFocus();
	}

	componentDidMount() {
		if (this.props.autoFocus) this.setLastFocus();
	}

	render() {
		return (<div onClick={this.props.onClick}>
		<h1 tabIndex="-1" ref={this.refHead}>{this.props.title}</h1>
		{this.createContent()}
		</div>);
	}
}

class EditBoard extends React.Component {
	constructor(props){
		super(props);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.state = {title: '', value: ''};
	}

	handleTitleChange(e) {
		this.setState({title: e.target.value});
	}

	handleContentChange(e) {
		this.setState({content: e.target.value});
	}

	render() {
		return (<div>
			<h1>preview</h1>
			<Board title={this.state.title} content={textToBoardData(this.state.content)} autoFocus={false}/>
			<h1>Input</h1>
			<label htmlFor="input-title">
				Enter title
			</label>
			<input autoFocus type="text" id="input-title" onChange={this.handleTitleChange} defaultValue={this.state.title}/>
			<label htmlFor="input-content">
				Enter some content
			</label>
			<textarea id="input-content" onChange={this.handleContentChange} defaultValue={this.state.content}/>
			<button onClick={()=> this.props.onDone(new BoardStorage(this.state.title, textToBoardData(this.state.content)))}>Done!</button>
			<button onClick={this.props.onCancel}>Cancel</button>
		</div>);
	}
}

class MainBoard extends React.Component {
	constructor(props){
		super(props);
		this.handleClickPrior = this.handleClickPrior.bind(this);
		this.handleClickNext = this.handleClickNext.bind(this);
		this.handleClickBoard = this.handleClickBoard.bind(this);
		this.onDone = this.onDone.bind(this);
		this.refBoard= React.createRef();
		this.state = {currentBoard: 0, editing:false, editCurrent:false};
	}

	componentDidMount () {
		this.listenEvents();
	}

	listenEvents() {
		db.ref('boards').endAt().limitToLast(1).on('child_added', e => {
			let val = e.val();
			console.log("ultimo boardData", JSON.parse(val));
			if (val){
				envStorage.boards.push(JSON.parse(val));
			}
		});
		
		db.ref('lastFocusId').on('value', e => {
			let val = e.val();
			console.log("ultimo focus", val);
			if (val){
				this.refBoard.current.setRefFocus(val);
				envStorage.lastFocusId = val;
			}
		});

		db.ref('lastBoardId').on('value', e => {
			let val = e.val();
			console.log("ultimo lastBoardId", val, typeof val);
			if (typeof val == "number"){
				this.changeBoard(val, true);
				envStorage.lastBoardId = val;
			}
		});
	}

	handleClickBoard(e) {
		var id = e.target.dataset.focusid;
		if (!id) return;
		envStorage.boards[envStorage.currentBoard].lastFocusId = id;
		db.ref("lastFocusId").set(id);
	}

	changeBoard(newCur, external) {
		if (newCur >= 0 && newCur < envStorage.boards.length) {
			envStorage.currentBoard = newCur;
			this.setState({currentBoard: newCur});
			if (!external) db.ref("lastBoardId").set(newCur);
		}
	}

	handleClickPrior() {
		var cur = this.state.currentBoard;
		--cur;
		this.changeBoard(cur);
	}

	handleClickNext() {
		var cur = this.state.currentBoard;
		++cur;
		this.changeBoard(cur);
	}

	onDone(e) {
		// if (this.state.editCurrent) this.updateBoard(e);
		var l = envStorage.boards.length;
		db.ref("boards").push(JSON.stringify(e));
		db.ref("lastBoardId").set(l);
		this.setState({editing:false});
	}
	
	render() {
		if (this.state.editing) return <EditBoard onDone={this.onDone}
		onCancel={()=> this.setState({editing:false, editCurrent:false})}/>;
		return (<div aria-live="assertive">
			<Board
			title={envStorage.boards[envStorage.currentBoard].title}
			content={envStorage.boards[envStorage.currentBoard].content}
			onClick={this.handleClickBoard}
			boardData={envStorage.boards[envStorage.currentBoard]}
			ref={this.refBoard}/>
			<button onClick={this.handleClickPrior}>previous board</button>
			<button onClick={this.handleClickNext}>Next board</button>
			<button onClick={e=> this.setState({editing:true})}>New board</button>
		</div>);
	}
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: null}
		
	}

	render () {
		return (<div className="App">
			<MainBoard/>
		</div>);
	}
}

