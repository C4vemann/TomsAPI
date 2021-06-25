class Card{
	constructor(file){
		console.log(file);
		this.element = document.createElement("div");
		this.element.setAttribute("class", "col100 card-container")
		let tempElement = document.createElement("img");
		tempElement.setAttribute("src", file);
		tempElement.setAttribute("class", "card-picture");


		this.element.appendChild(tempElement);
	}

	

}