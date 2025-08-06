let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

// print x, y, and z
console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b[0] = a;

// using DOT NOTATION, assign a PROPERTY to c
c.name = "Kyle";

// using DOT NOTATION, assign a METHOD to c
c.greet = function() {
  console.log(`Hello ${this.name}`);
};

// using BRACKET NOTATION, call the method in c
c["greet"]();

// print a, b, and c
console.log(a, b, c);
