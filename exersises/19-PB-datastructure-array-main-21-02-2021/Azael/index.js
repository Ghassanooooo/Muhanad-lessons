// !# 19-PB-datastructure-array

// # Array Exercises
// ## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// ### Declare a variable named myArr and assign an array to the variable e.g. input ==>

const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];

// ______________________________________________

// ** use push and pop and indexing the get the next output:

// ['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]

myArr.push("Germany");
myArr[1] = "SET item2";
myArr[2].pop();
myArr[2][0] = "Berlin";
myArr[2][1] = "subSubItem1";
myArr[0] = "Spain";
myArr[1] = "item1";

console.log("myArr ==>", myArr);
