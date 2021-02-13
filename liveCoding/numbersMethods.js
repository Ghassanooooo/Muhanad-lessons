// Numbers Methods

let age = 30;

// Integer ==> 1  3   4   100  66

// Float  ==> 1.3   6.7   0.88

//###################
// 1- toFixed()

let number_1 = 2.66466666;

console.log(number_1.toFixed(2)); // 2.66

let number_2 = 77;

console.log(number_2.toFixed(3)); // 77.000

/**
 22.99
 1.88
 5 ==> 5.00
 7 ==> 7.00
 100.77
 */

/*
// ADV

let ArrayOfNumbers = [22.99, 1.88, 5, 7, 100.77];

console.log(ArrayOfNumbers.join("  ")); // 22.99  1.88  5  7  100.77

let fixedNumbers = ArrayOfNumbers.map((num) => num.toFixed(2));

console.log(fixedNumbers); // [ '22.99', '1.88', '5.00', '7.00', '100.77' ]
*/

//###################

// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:
// 1. isNaN(value) converts its argument to a number and then tests it for being NaN:
// 2- isNaN()

let str = "hallo";

console.log(isNaN(str)); // true

console.log(isNaN(33)); //false

console.log(isNaN("100")); // false

console.log(isNaN("abc")); //true

console.log(isNaN("1.55")); //false

console.log(isNaN("abc1.55")); //true

//#####################

// 3- parseInt()

// any number to integer ( 1.44 => 1)

console.log(parseInt(2.33)); // 2
console.log(parseInt(66)); // 66

console.log(parseInt("100px")); // 100

console.log(parseInt("12.5em")); // 12

//#########################

// 4- parseFloat() any number to Float

console.log(parseFloat(3)); // 3
console.log(parseFloat("12.5em")); // 12.5

console.log(parseFloat("abc")); // NaN
