// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 1;
// 2) create a variable to represent the current total
let totalWhile = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (i <= 100) {
  totalWhile += i;
  i++;
}

console.log(totalWhile);

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
let totalFor = 0;

for (let x = 1; x <= 100; x++) {
  totalFor += x;
}

console.log(totalFor);
