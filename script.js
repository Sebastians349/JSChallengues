'use strict';

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
const markMass = 78;
const markHeight = 169;
const johnMass = 92;
const johnHeight = 169;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

const markBmi = (markMass / markHeight) * 2;
const johnBmi = (johnMass / johnHeight) * 2;
// console.log(markBmi)
// console.log(johnBmi);
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);
// Test data:
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
//              BREAKPOINT
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// if (markBmi > johnBmi ) { console.log(`John's BMI (${johnBmi}) is higher than Mark's! BMI (${markBmi})`);
// }

//  else{ console.log(`John's BMI (${johnBmi}) is higher than Mark's! BMI (${markBmi})`);
// }

// BREAKPOINT

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const averageDolphins = (97+112+101) /3;
// const averageKoalas = (109+95+123) /3;

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// const averageDolphins = (97+112+101) /3;
// const averageKoalas = (109+95+106) /3;

// console.log(`Dolphins ${Math.trunc(averageDolphins)}`);
// console.log(`Koalas ${Math.trunc(averageKoalas)}`);

//1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// const winner = averageDolphins > averageKoalas;
// // console.log(winner);
// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log(`Dolphins with the trophy with an average of ${Math.trunc(averageDolphins)} points 🎉 `);
// } else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
//     console.log(`Koalas with the trophy with an average of ${Math.trunc(averageKoalas)} points 🎉 `);
// } else if (averageDolphins === averageKoalas) {
//     console.log(`DRAW! No one wins 🤷‍♀️ `);
// } else {
//     console.log('Nobody wins! No one reach the minimum of 100 pts');
// }
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// BREAKPOINT

////////////////////////////////////
// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

// BREAKPOINT

// BREAKPOINT
// BREAKPOINT
// BREAKPOINT
// BREAKPOINT
// BREAKPOINT
// BREAKPOINT
// BREAKPOINT
// BREAKPOINT

// BREAKPOINT
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
