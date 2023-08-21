/*
Problem 2: Create a P element with a link inside. 
Then, write a JavaScript function to get the HREF attribute of the link.

*/

let p1 = document.getElementById('p1');

function myFunction() {
  var x = document.getElementById("myAnchor").href;
  p1.innerHTML = x;
}