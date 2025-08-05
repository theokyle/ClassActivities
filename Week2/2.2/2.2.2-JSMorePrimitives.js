// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let food = "pizza";
let amount = 10;
let isDelicious = true;
let notDefined;
let nullValue = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof food);
console.log(typeof amount);
console.log(typeof isDelicious);
console.log(typeof notDefined);
console.log(typeof nullValue);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
const eating = `I am eating ${amount} ${food}s.`;

// reassign the value of the variable that references "null"
nullValue = 15;

// print the value and its type
console.log(
  `The value is ${nullValue} and it has a type of ${typeof nullValue}.`
);

// print a variable that causes a ReferenceError
let DoesNotExist;
console.log(DoesNotExist);

// alter the previous line to no longer cause a ReferenceError
