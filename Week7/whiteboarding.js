// function sum2Integers(num1, num2) {
//   const sum = num1 + num2;
//   if (num1 === num2) {
//     return 3 * sum;
//   }
//   return sum;
// }

// console.log(sum2Integers(10, 10));

// function findHighest(array) {
//   let highest = array[0];
//   array.forEach(num => {
//     if (num > highest) {
//       highest = num;
//     }
//   });

//   return highest;
// }

// console.log(findHighest([4, 1, -4]));

// Question 3

// function five() {
//   //  Generate a random number between 0-10
//   const randomNumber = Math.floor(Math.random() * 11);

//   // Check if the number is greater than 5

//   if (randomNumber > 5) {
//     console.log(`${randomNumber} is greater than five!`);
//   } else if (randomNumber < 5) {
//     console.log(`${randomNumber} is less than 5!`);
//   } else {
//     console.log(`${randomNumber} is five!`);
//   }
// }

// five();

// Question 4

// const vowels = ["a", "e", "i", "o", "u"];

// function countVowels(word) {
//   let count = 0;
//   for (let letter of word) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("hello"));

// Question 5

function isPalindrome(string) {
  const reverseString = string
    .split("")
    .reverse()
    .join("");
  return string.toLowerCase() === reverseString.toLowerCase();
  // return string === reverseString;
}

console.log(isPalindrome("rAceCar"));

// Question 6

// function isPrime(num) {
//   if (num < 1) {
//     return false;
//   } else if (num === 1) {
//     return true;
//   } else {
//     for (let i = 2; i < Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(isPrime(6));

// Question 7

// function avgTestScores(name, ...testScores) {
//   let sum = 0;
//   let scoresString = "";
//   if (testScores.length === 0) {
//     console.log(`No test scores sent`);
//     return;
//   }
//   for (let i = 0; i < testScores.length; i++) {
//     sum += testScores[i];
//     if (i < testScores.length - 1) {
//       scoresString += `${testScores[i]}, `;
//     } else {
//       scoresString += `and ${testScores[i]}.`;
//     }
//   }
//   let average = sum / testScores.length;

//   console.log(
//     `${name} took ${testScores.length}, earning these scores: ${scoresString}`
//   );
//   console.log(`That's an average score of ${average}`);
// }

// avgTestScores(`John`, 95, 70, 87, 82);
