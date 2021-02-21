const myArr =  [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]

myArr.unshift("Spain");
myArr[2] = "SET item2";
myArr[3][0]="Berlin";
myArr.push("Germany","Delete");
myArr.pop();
console.log(myArr);
