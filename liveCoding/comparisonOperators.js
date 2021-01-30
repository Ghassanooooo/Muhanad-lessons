// Boolean Expressions: Comparison Operators
// <, <=, >, >=, ==, ===, !=, !==
console.log(1 < 2); // true
console.log(0 < -5); //false
console.log(3 > 7); // false
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true
console.log(-3 == -3); //true
// == vs ===
// === check the value and data type
console.log(1 === 1); //true
console.log(1 === "1"); // false ==> 1 number , "1" string

console.log(33 === "33"); // false
console.log("33" === "33"); // true

// == check the value
console.log(1 == 1); //true
console.log(1 == "1"); // true ==> 1 number , "1" string

console.log(33 == "33"); // true
console.log("33" == "33"); // true

console.log(2 == 4); // false

console.log(2 == " 2"); // true

// != vs !==

// != opt ==  != value

console.log(1 == 1); // true
console.log(1 == "1"); // true

console.log(1 != 1); // false
console.log(1 != "1"); // false

// !== opt === !== value and data type

console.log(1 === 1); // true
console.log(1 === "1"); // false

console.log(1 !== 1); // false
console.log(1 !== "1"); //true
