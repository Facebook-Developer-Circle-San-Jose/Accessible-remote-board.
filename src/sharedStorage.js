import {screenTest, parsedText} from './customFormat';
export class BoardStorage {
	constructor(title, content) {
		this.title = title;
		this.content = content;
		this.lastFocusId = undefined;
	}
}

export const envStorage = {
	currentBoard: 0,
	lastId: 1,
	lastFocusId: undefined,
	lastBoardId: undefined,
	boards: [
		new BoardStorage("hola 1", screenTest),
		new BoardStorage("hola 2", parsedText)]
}

