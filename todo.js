//othis code is for deleting and adding of list items.

var button= document.getElementById('enter');
var input= document.getElementById("input");
var ul =  document.querySelector("ul");
var button2 = document.getElementById('delete');

function len(){
	return input.value.length;
}

function listElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var butt = document.createElement("button");
	butt.write("hello");


}
function addelement(){
	if(len()>0){
		 return listElement();
	}
}

function addElementOnKkeypress(event){
	if(len() >0 && event.which === 13){
		 return listElement();	
	}
}
function deleteElement(){
	var li = document.querySelector("li");
	if(li === null){
		alert("OOPS !! Nothing to delete \nPlease ADD elements.");
		return 0;
	}
	return li.remove();
}

function deleteElementOnKeypress(event){
	if(event.which === 8){
		return deleteElement(); 		
	}
}
button.addEventListener("click",addelement);
input.addEventListener("keypress",addElementOnKkeypress);
button2.addEventListener("click",deleteElement);
input.addEventListener("keydown",deleteElementOnKeypress);


//------------------------------------------------------------------------------

//this code is for color picking app.

var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var color3= document.querySelector(".color3");
var div= document.querySelector(".color-picker");
var val = document.getElementsByTagName("p"); 

function gradientColorPick(){
	div.style.background= "linear-gradient(to right, "
	+ color2.value + ", "
	+ color3.value + ")";
	val.createTextNode = div.style.background + ";";
}

color1.addEventListener("input",function(){
	div.style.background= color1.value;		
})

color2.addEventListener("input", gradientColorPick);
color3.addEventListener("input", gradientColorPick);
