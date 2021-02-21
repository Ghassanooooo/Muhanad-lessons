// Declare a variable named myArr and assign an array to the variable e.g. input ==>
const myArr = [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]

// ** use push and pop and indexing the get the next output:

// ['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]

myArr.pop();
console.log(myArr);  //[ 'item1', 'item2' ]
myArr[0] = 'Spain';
console.log(myArr); 
myArr[1] = 'item1';
console.log(myArr); 
myArr[2] = 'SET item2'
console.log(myArr); 
myArr.push(["Berlin", "subSubItem1"]);
console.log(myArr); 
myArr.push('Germany');
console.log(myArr);
