// Declare a variable named myArr and assign an array to the variable e.g. input ==> 
const myArr =  ['item1', 'item2', ['subSubItem1', 'subSubItem2' ]] ;


const newArray = myArr.unshift('Spain');
console.log('myArr ==>', myArr) ; // [ 'Spain', 'item1', 'item2', [ 'subSubItem1', 'subSubItem2' ] ]

myArr.pop() ;
console.log('myArr==>', myArr); // [ 'Spain', 'item1', 'item2' ]
myArr.push(['Berlin', 'subSubItem1'], 'Germany') ; 
console.log('myArr==>', myArr); // [ 'Spain', 'item1', 'item2', [ 'Berlin', 'subSubItem1' ], 'Germany' ]

// change the exciting array 
myArr[2] = 'SET item2' ;
console.log('myArr==>', myArr); //
