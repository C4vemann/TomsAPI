/*  GRID CSS STYLES

	.grid-cell{
		display: inline-block;
		vertical-align: top;
		padding: 1%;
	}
	.grid-header1{
		text-align: center;
		font-size: 6em;
		font-style: bold;
	}
	.grid-body{
	}
	.grid-container{
		text-align: center;
	}
*/
class Grid{
	static #count = 0;

	static increaseCount(){
		this.#count += 1;
	}

	static getId(){
		let id = this.#count;
		Grid.increaseCount();
		return "grid"+id; 
	}

	static createGrid(id, name){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("id", id);
		wrapper.setAttribute("class", "col100 grid-container");
		wrapper.appendChild(Grid.createGridHeader(name));
		wrapper.appendChild(Grid.createGridBody());
		return wrapper;
	}

	static createGridHeader(name){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 grid-header1");
		let element = document.createElement("p");
		let text = document.createTextNode(name);
		element.appendChild(text);
		wrapper.appendChild(element);
		return wrapper;
	}

	static createGridBody(){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 grid-body");
		return wrapper;
	}

	addItem(){
		let dom = document.getElementById(this.id).getElementsByClassName("grid-body")[0];
		let local = this.element.getElementsByClassName("grid-body")[0];
		
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col30 grid-cell");
		wrapper.appendChild(new Item({file:'./lol.jpg',name:'Tulip',description:'One November night in the year 1782, so the story runs, two brothers sat over their winter fire in the little French town of Annonay, watching the grey smoke-wreaths from the hearth curl up the wide chimney. Their names were Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted as possessing thoughtful minds and a deep interest in all scientific knowledge and new discovery. Before that night—a memorable night, as it was to prove—hundreds of millions of people had watched the rising smoke-wreaths of their fires without drawing any special inspiration from the fact."',price:'$24.99'}).element);
		
		dom.appendChild(wrapper);
		local.appendChild(wrapper);
	}

	constructor(name){
		this.id = Grid.getId();
		this.element = Grid.createGrid(this.id, name);
	}
}