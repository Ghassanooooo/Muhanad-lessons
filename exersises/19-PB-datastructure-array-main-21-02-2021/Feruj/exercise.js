const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];
myArr.unshift("Spain")//add Spain
myArr[2] = 'SET item2'
myArr[3][1]= 'subSubItem1'
myArr[3][0] = "Berlin"
myArr.push('Germany')//Add Germany
console.log(myArr);//['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]
// console.log(myArr.length);//5
