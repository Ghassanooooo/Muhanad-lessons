//Declare a variable named myArr and assign an array to the variable e.g. input ==> 
const myArr = ['item1', 'item2', ['subSubItem1', 'subSubItem2']]

//** use push and pop and indexing the get the next output:
// ['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]
myArr.unshift("Spain")
myArr[2] = 'SET item2';
myArr[3][0] = "Berlin"
myArr[3][1] = "subSubItem2"
myArr.push('Germany')
console.log(myArr); // ['Spain', 'item1', 'SET item2', [ 'Berlin', 'subSubItem2' ], 'Germany']