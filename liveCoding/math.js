// Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.
// Math works with the Number type. It doesn't work with BigInt.

// Math.min()     /    Math.max()
// - Maximum and minimum with `Math.max()`, `Math.min()`

let biggerNumber = Math.min(2, 4, 6, 0, -8);
console.log(biggerNumber); // -8

let smallerNumber = Math.max(2, 4, 6, 0, -8);
console.log(smallerNumber); // 6

//#########################
// Math.ceil()
// The Math.ceil() function always rounds a number up to the next largest integer.
// Math.ceil(null) returns integer 0 and does not give a NaN error.

let ceilNumber = 3.1;

console.log(Math.ceil(ceilNumber)); // 4

let ceilNumber_1 = 5.0;

console.log(Math.ceil(ceilNumber_1)); // 5

console.log(Math.ceil(-6.88)); // -6

//#################

// Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number.

console.log(Math.floor(2.99)); // 2

console.log(Math.floor(88.1)); // 88

//##################

// Math.round()  if the float number bigger then 5 ==> integer + 1
// Math.round()  if the float number smaller then 5 ==> integer

console.log(Math.round(1.4)); // 1
console.log(Math.round(1.5)); // 2

//#######################

// Math.random()

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
// It cannot be chosen or reset by the user.

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Math.floor( Math.random() * (max - min + 1) + min );

let min = 2;
let max = 10;

let genNumber = Math.floor(Math.random() * (max - min + 1) + min);

console.log("genNumber ==> ", genNumber);
