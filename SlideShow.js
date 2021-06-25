/*
	classes:
		slideshow-container
		slideshow-button_left
		slideshow-button_right
		slideshow-button
		slideshow-view
		slideshow-wrapper

		card-container
		card-picture
*/

class SlideShow{
	static #count = 0;

	static increaseCount(){
		this.#count += 1;
	}

	static getId(){
		let id = this.#count;
		SlideShow.increaseCount();
		return "slideshow"+id;
	}
	
	static createSlideshow(id){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("id", id);
		wrapper.setAttribute("class", "col100 slideshow-container");
		/*wrapper.appendChild(SlideShow.createLeftButton());
		wrapper.appendChild(SlideShow.createRightButton());*/
		wrapper.appendChild(SlideShow.createView());
		return wrapper;
	}

	static createLeftButton(){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col10 slideshow-button-left slideshow-button");
		return wrapper;
	}

	static createRightButton(){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col10 slideshow-button-right slideshow-button");
		return wrapper;
	}

	static createView(){
		let wrapper = document.createElement("div");
		wrapper.setAttribute("class", "col100 slideshow-view");
		return wrapper;
	}

	constructor(){
		this.id = SlideShow.getId();
		this.element = SlideShow.createSlideshow(this.id);
		.addItem();

	}



/*	createElement(files){
		let container;
		let element;
		let element2;

		
		
		

		

		element2 = document.createElement("div");
		element2.setAttribute("class", "slideshow-wrapper");
		element2.setAttribute("style", "left:0px;");

		for(let index in files){
			element2.appendChild(new Card(files[index]).element);
		}

		element.appendChild(element2);
		container.appendChild(element);



		return container;
	}*/

	setButtons(id){
		var scrollbarLength = (window.innerWidth - document.getElementsByTagName('html')[0].clientWidth);
		console.log(scrollbarLength);
		this.element.getElementsByClassName("slideshow-button-left")[0].addEventListener("click", function(){
			let temp = parseInt(document.getElementById("slideshow" + id).getElementsByClassName("slideshow-wrapper")[0].style.left);
			console.log(temp);
			if(temp + window.innerWidth > 0){
				return;
			}else{
				document.getElementById("slideshow" + id).getElementsByClassName("slideshow-wrapper")[0].style.left = (temp + window.innerWidth) + "px";
			}
		});

		this.element.getElementsByClassName("slideshow-button-right")[0].addEventListener("click", function(){
			let temp = parseInt(document.getElementById("slideshow" + id).getElementsByClassName("slideshow-wrapper")[0].style.left);
			console.log(temp);
			if(temp - window.innerWidth <= -window.innerWidth * files.length){
				return;
			}else{
				document.getElementById("slideshow" + id).getElementsByClassName("slideshow-wrapper")[0].style.left = (temp - window.innerWidth) + "px";
			}
		});
	}
}