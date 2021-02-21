const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];

// ** use push and pop and indexing the get the next output:

myArr.pop();
myArr[0] = "Spain";
myArr[1] = "item1";
myArr.push("SET item2");
myArr.push(["Berlin", "subSubItem1"]);
myArr.push("Germany");
console.log(myArr);
