//These exercises are aimed at practicing arrays and array methods.Print each task to the console.
// Declare a variable named myArr and assign an array to the variable e.g.input ==>
const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];

myArr.push("Germany");
console.log("add germany:", myArr);

myArr[2].unshift("Berlin"), myArr[2].pop();
console.log("add berlin:", myArr);

myArr.unshift("Spain");
console.log("add spain:", myArr);

myArr[2] = "SET item2";
console.log("add SET:", myArr); // finish  ==>
/* [
  'Spain',
  'item1',
  'SET item2',
  [ 'Berlin', 'subSubItem1' ],
  'Germany'
]*/

// ** use push and pop and indexing the get the next output:

// ['Spain', 'item1', 'SET item2', ['Berlin', 'subSubItem1'], 'Germany']
