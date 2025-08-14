const nums = [6, 5, 2, 3, 4, 1, 0];

// remove each of the last two items with pop(), saving each item to a variable
const zero = nums.pop();
const one = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable
const six = nums.shift();
const five = nums.shift();

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(zero, one);
nums.push(five, six);
console.log(nums);
