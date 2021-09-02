'use strict';

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
const markMass =  78;
const markHeight =  169;
const johnMass= 92;
const johnHeight =  169;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

const markBmi= markMass/markHeight * 2 ;
const johnBmi= johnMass/johnHeight * 2 ;
console.log(markBmi)
console.log(johnBmi);
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);
// Test data:
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
if (markBmi > johnBmi ) { console.log(`John's BMI (${johnBmi}) is higher than Mark's! BMI (${markBmi})`);
}
        
 else{ console.log(`John's BMI (${johnBmi}) is higher than Mark's! BMI (${markBmi})`);
}