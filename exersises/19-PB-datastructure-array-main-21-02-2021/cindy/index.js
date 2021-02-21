const myArr = [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]


//Using push (end of array)
myArr.push("Germany")
//Using unshift (start of array)
myArr.unshift("Spain")
//Editing the array
myArr[2] = 'SET item2'
//Adding Berlin and fixing the second array
myArr[3][0]= 'Berlin'
myArr[3][1]= 'subSubItem1'


//getting the best answers :v 
console.log(myArr)