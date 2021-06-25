/*	ITEM CSS STYLES

	.item-container{
	}
	.item-header{
	}
	.item-picture{
		max-width: 100%;
	}
	.item-name{
		font-size: 4em;
		font-style: bold;
	}
	.item-description{
		text-align: left;
		font-size: 1.5em;
	}
	.item-price{
		text-align: right;
		font-size: 2em;
	}
*/
class Item{
	static #count = 0;

	static increaseCount(){
		this.#count += 1;
	}

	static getId(){
		let id = this.#count;
		Item.increaseCount();
		return "item"+id; 
	}

	static createItem(id, info){
		let item = document.createElement("div");
		item.setAttribute("id", id);
		item.setAttribute("class", "col100 item-container");
		item.appendChild(Item.createItemPicture(info['file']));
		item.appendChild(Item.createItemName(info['name']));
		item.appendChild(Item.createItemDescription(info['description']));
		item.appendChild(Item.createItemPrice(info['price']));
		return item;
	}

	static createItemPicture(file){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 item-header");
		let element = document.createElement("img");
		element.setAttribute("class", "item-picture");
		element.setAttribute("src", file);
		wrapper.appendChild(element);
		return wrapper;
	}

	static createItemName(name){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 item-name");
		let element = document.createElement("p");
		let text = document.createTextNode(name);
		element.appendChild(text);
		wrapper.appendChild(element);
		return wrapper;

	}

	static createItemDescription(description){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 item-description");
		let element = document.createElement("p");
		let text = document.createTextNode(description);
		element.appendChild(text);
		wrapper.appendChild(element);
		return wrapper;
	}

	static createItemPrice(price){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 item-price");
		let element = document.createElement("p");
		let text = document.createTextNode(price);
		element.appendChild(text);
		wrapper.appendChild(element);
		return wrapper;
	}

	constructor(info){
		this.id = Item.getId();
		this.element = Item.createItem(this.id, info);
	}
}