// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function addSum(number1, number2) {
  console.log(number1, number2);
  return number1 + number2;
}

// invoke the function and pass in two numbers
console.log(`Pass two numbers: ${addSum(2, 3)}`);

// invoke the function and pass in more than two numbers
console.log(`Pass more than two numbers: ${addSum(2, 3, 4)}`);

// invoke the function and pass in only one number
console.log(`Pass one number: ${addSum(2)}`);

// change the function to set default values for the parameters
function addSumDefault(number1 = 1, number2 = 2) {
  console.log(number1, number2);
  return number1 + number2;
}

// again, invoke the function and pass in only one number
console.log(`Default values: ${addSumDefault(2)}`);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function returnParams(...nums) {
  return nums;
}

// again, invoke the function and pass in more than two numbers
console.log(`Print params: ${returnParams(2, 3, 4, 5)}`);

// Extra Bonus because I wanted to use the params:
function addNums(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(addNums(1, 2, 3, 4, 5));
