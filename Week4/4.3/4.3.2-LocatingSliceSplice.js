const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firsta = arr.indexOf("a");
const firstb = arr.indexOf("b");
const firstc = arr.indexOf("c");

// find the last index of "a", "b", and "c"
const lasta = arr.lastIndexOf("a");
const lastb = arr.lastIndexOf("b");
const lastc = arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

while (firsta !== arr.lastIndexOf("a")) {
  arr.splice(arr.lastIndexOf("a"), 1);
}
console.log(arr);
