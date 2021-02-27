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

//###########################################################

// splice(start, items) DELETE

// splice returns the array of removed elements

let myArr5 = [3,4,5,7,11]

console.log('myArr5.splice(1, 2) ==> ', myArr5.splice(1, 2))//myArr5.splice(1, 2) ==>  [ 4, 5 ]

console.log('myArr5 ==> ',myArr5) //myArr5 ==>  [ 3, 7, 11 ]



let myArray6 = ['item 1', 'item 2', 11, 'hallo', 'A', 'B', 'C']

console.log('myArray6 ==> ', myArray6)// myArray6 ==>  [ 'item 1', 'item 2', 11, 'hallo', 'A', 'B', 'C' ]
myArray6.splice(2, 3)

console.log('myArray6 ==> ', myArray6) //myArray6 ==>  [ 'item 1', 'item 2', 'B', 'C' ]

//###############################################

// slice(start(index), end(length))  COPY

let myArr7 = ['A', 'B','C',2 ,4,66,'D']

let partFromArray = myArr7.slice(1, 5)

console.log('partFromArray ==> ', partFromArray)//partFromArray ==>  [ 'B', 'C', 2 ]

let partFromArray2 = myArr7.slice(2,4)

console.log('partFromArray2 ==> ', partFromArray2) //partFromArray2 ==>  [ 'C', 2 ]

console.log('myArr7 ==> ',myArr7) 
/**
 myArr7 ==>  [
  'A', 'B', 'C', 2,
  4,   66,  'D'
]
 */


 let myArr8 = partFromArray2

 //##########################################

 // concat()
// concat() creates a new array that includes values from other arrays and additional items.
// It accepts any number of arguments – either arrays or values.

let arr_1_1 =[3,4,6,7,8,10]
let arr_2_2 = ['a','b','c']
let arr_3_3 =['Alex','Piler']

let resArrays = arr_1_1.concat(arr_2_2,arr_3_3)

console.log('resArrays ==> ',resArrays)


 /**
  3,      4,       6,
  7,      8,       10,
  'a',    'b',     'c',
  'Alex', 'Piler'
]
  */



 console.log('arr_1_1 ==> ',arr_1_1) // arr_1_1 ==>  [ 3, 4, 6, 7, 8, 10 ]


 //###############################################
 // reverse()
// The method reverse reverses the order of elements in arr.

let arrayToReverse = ['C','Alex',44,'test',88,'B']

console.log('arrayToReverse ==> ',arrayToReverse)// [ 'C', 'Alex', 44, 'test', 88,'B' ]

arrayToReverse.reverse()

console.log('arrayToReverse ==> ',arrayToReverse) //   [ 'B', 88, 'test', 44, 'Alex', 'C' ]


// ##################

// includes()  ==> true  or  false

let arrayToTest = ['alex','tommy','ali','Max']


console.log(arrayToTest.includes('tommy')) // true
console.log(arrayToTest.includes('Ali')) // false
console.log(arrayToTest.includes('Max')) // true

// ####################

// toString() array to string

let arrToStr = ['ali', 66, 'Max']

console.log(arrToStr) // [ 'ali', 66, 'Max' ]

console.log(arrToStr.toString()) // ali,66,Max

// ####################

// join() array to string


let arrToStr_2 = ['ali', 66, 'Max',88]

console.log(arrToStr_2.join('?')) // ali?66?Max?88

console.log(arrToStr_2.join(' ')) //ali 66 Max 88

console.log(arrToStr_2.join('#')) // ali#66#Max#88






