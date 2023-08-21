/*Write a JavaScript function that displays the number of items and displays the item in 
the list when you select from the dropdown.*/


//define a function that display the number of item when clicked.
let p1 = document.getElementById("p1");

function myFunction() {

	var x = document.getElementById("mySelect").options.length;
	p1.innerHTML = "There are " + x + " Cars in the list.";
}