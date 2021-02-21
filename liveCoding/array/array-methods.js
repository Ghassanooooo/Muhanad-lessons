// Array Methods

//! Stack Methods  pop() and push() The end of array
/*
 The push() method accepts any number of arguments and adds them to the end of the array, returning the array’s new length. The pop() method, on the other hand, removes the last item in the array, decrements the array’s length, and returns that item. Consider this example:
 */

let arr1 = ["Ali", "Max"];

console.log("arr1 ==> ", arr1);

arr1.pop();

console.log("arr1 ==> ", arr1); //[ 'Ali' ]

let arr2 = [2, 4, 5, 1];

console.log("arr2 ==> ", arr2); // [ 2, 4, 5, 1 ]

arr2.push("Alex");

console.log("arr2 ==> ", arr2); // [ 2, 4, 5, 1, 'Alex' ]
arr2.push("HAllo");
console.log("arr2 ==> ", arr2); //[ 2, 4, 5, 1, 'Alex', 'HAllo' ]

/**######################## */

//! Queue Methods    shift() and unshift() the start of the array

let arr3 = [6, 88, 44];

console.log("arr3 ==> ", arr3); // arr3 ==>  [ 6, 88, 44 ]

arr3.shift();
console.log("arr3 ==> ", arr3); //arr3 ==>  [ 88, 44 ]

let arr4 = ["A", "B", "C"];

console.log("arr4 ==> ", arr4); // arr4 ==>  [ 'A', 'B', 'C' ]
arr4.unshift("new item");

console.log("arr4 ==> ", arr4); //  [ 'new item', 'A', 'B', 'C' ]

arr4[1] = "Ali";
console.log("arr4 ==> ", arr4); //[ 'new item', 'Ali', 'B', 'C' ]

arr4[1] = 100;

console.log("arr4 ==> ", arr4); //[ 'new item', 100, 'B', 'C' ]
