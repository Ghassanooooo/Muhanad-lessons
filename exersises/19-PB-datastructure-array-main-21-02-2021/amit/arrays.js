const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];

// ans should be ['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]

myArr.unshift("Spain");
myArr[2] = "SET item2";
myArr[3][0] = "Berlin";
myArr[3][1] = "subSubItem1";
myArr.push("Germany");
console.log(myArr);
