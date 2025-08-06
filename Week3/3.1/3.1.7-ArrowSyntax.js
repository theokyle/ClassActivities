// refactor the functions below into arrow syntax
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

const greet = name => `Hello, ${name}`;

const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

console.log(myNumberFunction());
console.log(greet("Kyle"));
console.log(timeOfDayGreet("Kyle", "afternoon"));
console.log(tripleAndHalf(3));
console.log(sumTwoNumbers(2, 3));
