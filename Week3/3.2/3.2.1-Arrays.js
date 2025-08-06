// create an Array using an Array literal
const pizzaToppings = ["pepperoni", "sausage", "mushrooms"];

// access the 1st item in the Array
console.log(pizzaToppings[0]);

// access the last item in the Array
console.log(pizzaToppings[2]);

// print the length of the Array
console.log(pizzaToppings.length);

// use the length property to access the last item in the Array
console.log(pizzaToppings[pizzaToppings.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const lotsaToppings = [];
for (const topping of pizzaToppings) {
  lotsaToppings.push(`lotsa ${topping}`);
}
