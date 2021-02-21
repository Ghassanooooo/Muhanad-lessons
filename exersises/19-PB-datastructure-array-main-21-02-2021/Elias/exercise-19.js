const myArr = ['item1', 'item2', ['subSubItem1', 'subSubItem2']];

myArr.push('Germany');
console.log(myArr);
myArr.unshift('Spain');
console.log(myArr);
myArr[3].pop();
console.log(myArr);
myArr[3].unshift('Berlin');
console.log(myArr);
myArr[2] = 'SET item2';
console.log(myArr);