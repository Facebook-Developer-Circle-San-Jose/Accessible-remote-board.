(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(36)},22:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(15),s=n.n(i),r=(n(22),n(4)),c=n(7),l=n(9),u=n(8),h=n(5),d=n(10),f=n(6),p=n.n(f),b=(n(34),n(35),function e(t,n,a){if(Object(r.a)(this,e),this.t=t,!a&&!Array.isArray(a)){var o=[a,n];n=o[0],a=o[1]}this.id=n,("string"==typeof a||a instanceof e)&&(a=[a]),this.c=a});function v(e){var t=0,n={t:void 0,c:[]},a=n;if(e){for(var o=e.split("\n"),i=0;i<o.length;++i){var s=o[i];if(s){var r=s.match(/^(#+|\*o*|t\() /);if(r){if(r=r[1],s=s.slice(r.length+1,s.length)){"t("==r&&function(){var e="td";"table"!=a.t&&(a=new b("table",++t,[]),e="th",n.c.push(a)),a.c.push(new b("tr",++t,s.split(",").map((function(n){return new b(e,++t,new b("Sec",++t,n.trim()))}))))}();var c=new b("Sec",++t,s);if("#"==r[0]&&r.length<7)(a=n).c.push(new b("h"+r.length,++t,c));else if("*"==r[0]){var l="*o"==r?"ol":"ul";a.t!=l&&(a=new b(l,++t,[]),n.c.push(a)),a.c.push(new b("li",++t,c))}}}else(a=n).c.push(new b("p",++t,new b("Sec",++t,s)))}}return n.c}}var m=v("# Accessibility and impaired people.\n\nDon't think of people with disabilities and people without disabilities.\nThink about the fact that we all have different needs and the environment when we don't design it correctly, it will put barriers for someone.\nFor example, if you want to use an application where the unique language is Japanese and you don't know the language,\nthat would be a barrier even if you don't have a disability.\n\nYes, people with disabilities have more barriers because the world isn't usually built with us in mind?\nbut we all have different needs.\nSo, don't assume things. Ask users first. You know it,\nbut it applies for inpaired users also. Don't forget it.\nOne of my goals has always been to bring people with disabilities closer to technology,\nsince we are a group quite excluded in the solutions,\nand many times, other people take decisions for us thinking what is best without asking first."),g=v("Those who want to test it also, can follow me on this link.\nhttp://bit.ly/remoteboard\n\n## The situation:\nSome people thinking in the accessibility provide people with digital material.\nOthers are more specific about the points they are talking about. But it's not enough, because I still have to look for the point of the current topic on my own. It can often be frustrating. Not to mention when the conference is online or is a video. Sometimes it's impossible to follow.\nI want to know the sections pointed by the presenter. T know automatically the current slide in the presenter screen. I'd like to have the possibility to point sections as sighted people doo. ETC.\n## next steps.\n* as a next step, I'll to integrate this project with presentation suites through plug-ins.\n* In the future Id like to synchronize this app with multimedia content such as videos so we don't miss out on the online lessons or online conferences.\n\nThe format here is just to demonstrate this application."),k=function e(t,n){Object(r.a)(this,e),this.title=t,this.content=n,this.lastFocusId=void 0},w={currentBoard:0,lastId:1,lastFocusId:void 0,lastBoardId:void 0,boards:[new k("Accessibility in the world",m),new k("Accessible remote board",g)]};p.a.initializeApp({apiKey:"AIzaSyB6JklybdPvmLcJigv8Z9dswNmF3LTQcFM",authDomain:"accessible-remote-board.firebaseapp.com",databaseURL:"https://accessible-remote-board.firebaseio.com",projectId:"accessible-remote-board",storageBucket:"accessible-remote-board.appspot.com",messagingSenderId:"493998861743",appId:"1:493998861743:web:4155c8afbc234b0e80135a",measurementId:"G-BB9MKZNJS9"});var y=p.a.database(),C=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).focus=n.focus.bind(Object(h.a)(n)),n.refSpan=o.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"focus",value:function(){this.refSpan.current.focus()}},{key:"render",value:function(){return o.a.createElement("span",{tabIndex:"-1","data-focusid":this.props["data-focusid"],ref:this.refSpan},this.props.children)}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).childrenRefs={},n.refHead=o.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"createContent",value:function(){var e=this.props.content;if(e){var t={},n=function e(n,a){var i=[];for(var s in n)if("string"!==typeof(s=n[s])){if(s.t){var r=void 0,c=a,l=s.t,u=s.c;"table"===l?u=[new b("tbody",u)]:"Sec"===l&&(r=o.a.createRef(),t[s.id]=r,l=C,c=s.id),i.push(o.a.createElement(l,{key:s.id,ref:r,"data-focusid":c,children:e(u,c)}))}}else i.push(s);return i}(e);return this.childrenRefs=t,n}}},{key:"setRefFocus",value:function(e){this.childrenRefs[e]&&this.childrenRefs[e].current.focus(),w.boards[w.currentBoard].lastFocusId=e}},{key:"setLastFocus",value:function(){this.props.boardData&&this.props.boardData.lastFocusId?this.setRefFocus(this.props.boardData.lastFocusId):this.refHead.current.focus()}},{key:"componentDidUpdate",value:function(){this.props.autoFocus&&this.setLastFocus()}},{key:"componentDidMount",value:function(){this.props.autoFocus&&this.setLastFocus()}},{key:"render",value:function(){return o.a.createElement("div",{onClick:this.props.onClick},o.a.createElement("h1",{tabIndex:"-1",ref:this.refHead},this.props.title),this.createContent())}}]),t}(o.a.Component);O.defaultProps={autoFocus:!0};var j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleContentChange=n.handleContentChange.bind(Object(h.a)(n)),n.handleTitleChange=n.handleTitleChange.bind(Object(h.a)(n)),n.state={title:"",value:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({content:e.target.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"preview"),o.a.createElement(O,{title:this.state.title,content:v(this.state.content),autoFocus:!1}),o.a.createElement("h1",null,"Input"),o.a.createElement("label",{htmlFor:"input-title"},"Enter title"),o.a.createElement("input",{autoFocus:!0,type:"text",id:"input-title",onChange:this.handleTitleChange,defaultValue:this.state.title}),o.a.createElement("label",{htmlFor:"input-content"},"Enter some content"),o.a.createElement("textarea",{id:"input-content",onChange:this.handleContentChange,defaultValue:this.state.content}),o.a.createElement("button",{onClick:function(){return e.props.onDone(new k(e.state.title,v(e.state.content)))}},"Done!"),o.a.createElement("button",{onClick:this.props.onCancel},"Cancel"))}}]),t}(o.a.Component),B=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClickPrior=n.handleClickPrior.bind(Object(h.a)(n)),n.handleClickNext=n.handleClickNext.bind(Object(h.a)(n)),n.handleClickBoard=n.handleClickBoard.bind(Object(h.a)(n)),n.onDone=n.onDone.bind(Object(h.a)(n)),n.refBoard=o.a.createRef(),n.state={currentBoard:0,editing:!1,editCurrent:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.listenEvents()}},{key:"listenEvents",value:function(){var e=this;y.ref("boards").endAt().limitToLast(1).on("child_added",(function(e){var t=e.val();console.log("ultimo boardData",JSON.parse(t)),t&&w.boards.push(JSON.parse(t))})),y.ref("lastFocusId").on("value",(function(t){var n=t.val();console.log("ultimo focus",n),n&&(e.refBoard.current.setRefFocus(n),w.lastFocusId=n)})),y.ref("lastBoardId").on("value",(function(t){var n=t.val();console.log("ultimo lastBoardId",n,typeof n),"number"==typeof n&&(e.changeBoard(n,!0),w.lastBoardId=n)}))}},{key:"handleClickBoard",value:function(e){var t=e.target.dataset.focusid;t&&(w.boards[w.currentBoard].lastFocusId=t,y.ref("lastFocusId").set(t))}},{key:"changeBoard",value:function(e,t){e>=0&&e<w.boards.length&&(w.currentBoard=e,this.setState({currentBoard:e}),t||y.ref("lastBoardId").set(e))}},{key:"handleClickPrior",value:function(){var e=this.state.currentBoard;--e,this.changeBoard(e)}},{key:"handleClickNext",value:function(){var e=this.state.currentBoard;++e,this.changeBoard(e)}},{key:"onDone",value:function(e){var t=w.boards.length;y.ref("boards").push(JSON.stringify(e)),y.ref("lastBoardId").set(t),this.setState({editing:!1})}},{key:"render",value:function(){var e=this;return this.state.editing?o.a.createElement(j,{onDone:this.onDone,onCancel:function(){return e.setState({editing:!1,editCurrent:!1})}}):o.a.createElement("div",{"aria-live":"assertive"},o.a.createElement(O,{title:w.boards[w.currentBoard].title,content:w.boards[w.currentBoard].content,onClick:this.handleClickBoard,boardData:w.boards[w.currentBoard],ref:this.refBoard}),o.a.createElement("button",{onClick:this.handleClickPrior},"previous board"),o.a.createElement("button",{onClick:this.handleClickNext},"Next board"),o.a.createElement("button",{onClick:function(t){return e.setState({editing:!0})}},"New board"))}}]),t}(o.a.Component),I=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={user:null,showLogin:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.auth().onAuthStateChanged((function(t){e.setState({user:t}),console.log(t)}))}},{key:"handleSignIn",value:function(){var e=new p.a.auth.GoogleAuthProvider;p.a.auth().signInWithPopup(e)}},{key:"handleLogOut",value:function(){p.a.auth().signOut()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},!this.state.user&&this.state.showLogin?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:this.handleSignIn.bind(this)},"Sign in"),o.a.createElement("button",{onClick:function(){return e.setState({showLogin:!1})}},"dismis")):this.state.showLogin&&o.a.createElement("button",{onClick:this.handleLogOut.bind(this)},"Logout"),o.a.createElement(B,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e1e31d41.chunk.js.map