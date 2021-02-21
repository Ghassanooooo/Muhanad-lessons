// 19 - datastructure array

const myArr = [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]
console.log("myArr ==> ", myArr)


// use push and pop and indexing the get the next output:
//['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]

myArr.pop()
console.log("myArr ==> ", myArr)
myArr.push(["Berlin",'subSubItem1'], "Germany")
console.log("myArr ==> ", myArr)

myArr[1] ="SET item2"
console.log("myArr ==> ", myArr)

myArr.unshift("Spain")
console.log("myArr ==> ", myArr)