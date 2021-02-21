//# 19-PB-datastructure-array
//# Array Exercises
//## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

//### Declare a variable named myArr and assign an array to the variable e.g. input ==>

const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];
myArr[0] = "Spain";
myArr[1] = "item1";
myArr[2] = "SET item2";
myArr[3] = ["Berlin", "subSubItem1"];
myArr[4] = "Germany";
console.log(myArr);

const myArr1 = ["item1", "item2", ["subSubItem1", "subSubItem2"]];
myArr1.unshift("Spain");
myArr1[2] = "SET " + myArr1[2];
console.log(myArr1[3][0]);
myArr1[3][0] = "Berlin";
myArr1[3][1] = "subSubItem1";
myArr1.push("Germany");
console.log(myArr1);
//['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]
