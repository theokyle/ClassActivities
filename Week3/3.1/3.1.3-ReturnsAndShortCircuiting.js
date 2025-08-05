// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

// change the function above to return a value

// Early Return Pattern
// ! the console.log will not print
function exampleEarlyReturnFunction() {
  // Check for a condition to be met and stop the execution of the function
  //   This condition is normally checking for invalid data or an error condition
  if (true) {
    // By checking for true this condition is always met
    return "Zap! - Early Return!";
  }
  console.log(
    "This will never print because it is after the early return statement."
  );
  return "We made it to the end!";
}

// ? will the following function early return?
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}

// change the function above to exit as early as possible
