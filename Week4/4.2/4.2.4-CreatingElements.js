// create a new unordered list (ul) element
const list = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(list);

// create two new list item (li) elements, and add some text to them
const firstListItem = document.createElement("li");
const secondListItem = document.createElement("li");
firstListItem.textContent = "About";
secondListItem.textContent = "Contact";

// add the li elements to the ul in the nav-bar
list.appendChild(firstListItem);
list.appendChild(secondListItem);
