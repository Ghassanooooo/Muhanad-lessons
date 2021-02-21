const myArr =  [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]

myArr.unshift('Spain');
myArr.push('Germany');
myArr[2] = 'SET item2'
myArr[3] = ['Berlin','subSubItem1' ]

console.log(myArr);