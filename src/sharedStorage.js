import {screenTest, parsedText} from './customFormat';
export class BoardStorage {
	constructor(title, content, id) {
		this.title = title;
		this.content = content;
		this.lastFocusId = undefined;
		this.id = id;
	}
}

export const envStorage = {
	currentBoard: 0,
	lastId: 1,
	lastFocusId: undefined,
	lastBoardId: undefined,
	boards: {
		0: new BoardStorage("hola 1", screenTest, 0),
		1: new BoardStorage("hola 2", parsedText, 1)
	}
}

