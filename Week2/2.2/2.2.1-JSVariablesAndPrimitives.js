// create a constant variable called "name" that references a string

const name = "Kyle";

// create a reassignable variable called "favoriteSong" that references a string

let favoriteSong = "Jesus, etc.";

// create a reassignable variable called "wage" that references a number

let wage = 100;

// create a variable called "age" that references a number, should it be reassignable?
let age = 40;

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = false;

// print the types of two variables that reference two different data types (typeof)
console.log(typeof name);
console.log(typeof wage);
console.log(typeof onlyChild);

// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "board games";
console.log(favoriteThing);

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Betty";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 42;

// Happy Birthday!
// Reassign "age" to a new value
age = 41;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 1000000;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("My name is " + name + " and I am " + age + " years old.");
