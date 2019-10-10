
// Structure to paint a screen.
export class element {
	// all elements should have a id, except children for Sec. Since id is for focus purposes and the smallest area is a Section element.
	constructor(t, id, c) {
		this.t = t; // string with a valid html or react element.
		if (!c && !Array.isArray(c)) [id,c] = [c,id];
		this.id= id; // int or undefined
		if (typeof c == "string" || c instanceof element) c = [c];
		this.c= c; // array of elements, or element or string.
	}
}

export function textToBoardData(s) {
	var id = 0, data = {t:undefined, c:[]}, currentBlock = data;
	if (!s) return;
	var lines = s.split("\n");
	for (let i=0; i<lines.length; ++i) {
		let l = lines[i]
		if (!l) continue;
		let e = l.match(/^(#+|\*o*|t\() /);
		if (!e){
			currentBlock = data;
			currentBlock.c.push(new element("p", ++id, new element("Sec", ++id, l)));
			continue;
		}
		e= e[1];
		l = l.slice(e.length+1, l.length);
		if (!l) continue;
		if (e == "t(") {
			let t = "td";
			if (currentBlock.t != "table") {
				currentBlock = new element("table", ++id, []);
				t= "th";
				data.c.push(currentBlock);
			}
			currentBlock.c.push(new element("tr", ++id, l.split(",").map(
				e=> new element(t, ++id, new element("Sec", ++id, e.trim())))));
		}
		let sec = new element("Sec", ++id, l);
		if (e[0] == "#" && e.length < 7) {
			currentBlock = data;
			currentBlock.c.push(new element("h"+e.length, ++id, sec));
		}
		else if (e[0] == "*") {
			let t = e == "*o"? "ol": "ul";
			if (currentBlock.t != t) {
				currentBlock = new element(t, ++id, []);
				data.c.push(currentBlock)
			}
			currentBlock.c.push(new element("li", ++id, sec));
		}
	}
	return data.c;
}

// programatically created test.
export const screenTest = [new element("Sec", 1, new element("p", "this is a test")),
new element("Sec", 13, new element("p", "The second line")),
	new element("table", 2, [
		new element("tr", 3, [
			new element("th", 4, new element("Sec", 5, "cell 1")),
			new element("th", 6, new element("Sec", 7, "cell 2"))]),
		new element("tr", 8, [
			new element("td", 9, new element("Sec", 10, "cell 3")),
			new element("td", 11, new element("Sec", 12, "cell 4"))])])];

// parsing test.
export const  parsedText = textToBoardData(`# title 1
some description of a paragraph.
## subtitle 2.
* item x
* item y

## another subtitle 2.
*o item 1
*o item 2

# more title 1.
a basic table.
t( header cell 1, header cell 2
t( content cell 1, content cell 2
`);

