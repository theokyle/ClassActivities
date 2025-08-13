// select all unordered list (ul) elements
console.log(document.querySelectorAll("ul"));
document.getElementsByTagName("ul");

// select all elements with the class "class-week"
console.log(document.querySelectorAll(".class-week"));
document.getElementsByClassName("class-week");

// select all elements with the class "nav-bar"
console.log(document.querySelectorAll(".nav-bar"));
document.getElementsByClassName("nav-bar");

// select the element with the id "dog-picture" and save it to a variable
const dog = document.getElementById("dog-picture");
// const dog = document.querySelector("#dog-picture");
console.log(dog);
