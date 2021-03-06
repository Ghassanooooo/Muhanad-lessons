// Loops are used to repeat our actions.
// In computer sicience, a loop is a sequence of instructions that is continually repeated until a certain condition is met.



//  syntax: for(begin; condition; step) { ....render the image.... }

// begin(i = 0) : Executes once upon entering the loop.

// condition(i <= 3): Checked before every loop iteration. If false, the loop stops.

// body({console.log(i)}): Runs again and again while the condition is truthy.

// step(i++): Executes after the body on each iteration.
for(let i = 0 ;i <= 5; i++  ){
console.log(i)
/**
let i = 0 # i(0) <= 5 ==> true # console.log(0) # i++ => i(0) + 1 => 1
 i = 1 # i(1) <= 5 ==> true # console.log(1) # i++ => i(1) + 1 => 2
 i = 2 # i(2) <= 5 ==> true # console.log(2) # i++ => i(2) + 1 = 3
 i = 3 # i(3) <= 5 ==> true # console.log(3) # i++ => i(3) + 1 = 4
 i = 4 # i(4) <= 5 ==> true # console.log(4) # i++ => i(4) + 1 = 5
 i = 5 # i(5) <= 5 ==> true # console.log(5) # i++ => i(5) + 1 = 6
 i = 6 # i(6) <= 5 ==> false ==> STOP
 */
}

let names = ['Alex', 'Ali', 'Pilar', 'Max','Carlos','Ghassan']

// Alex ==> index ==> i = 0

// Max ==> index ==> length - 1 ==> i <= length - 1 (i < length )

// Hallo Alex, ...

// console.log(names[1])

for(let i= 0 ; i < 4; i++){
  //  console.log('names index => ',i)
  console.log('Hallo ',names[i])
}

console.log('###################')

// i < names.length 
// 6 < 6 = false


for(let i = 0; i < names.length; i++){
    console.log('Hallo ',names[i])
}
console.log('###################')
// i < names.length - 1 

// 6 <= 5 = false

for(let i = 0; i <= names.length - 1; i++){
    console.log('Hallo ',names[i])
}


console.log('###################')

let products = ['product 1', 'product 2','product 3','product 4']

//  with for loop print ==>  'product 3','product 4',..


for(let i =2; i< products.length ;i++){
    console.log(products[i])
}
console.log('###################')
// Input

 let myString = "Digital Career Institute";
 for(let i = 0;i<myString.length;i++){
     console.log('The index of',myString[i],'is',i)
 }




// Output
// The index of D is 0
// The index of i is 1
// The index of g is 2
// The index of i is 3
// The index of t is 4
// The index of a is 5
// The index of l is 6
// The index of   is 7
// The index of C is 8
// The index of a is 9
// The index of r is 10
// The index of e is 11
// The index of e is 12
// The index of r is 13
// The index of   is 14
// The index of I is 15
// The index of n is 16
// The index of s is 17
// The index of t is 18
// The index of i is 19
// The index of t is 20
// The index of u is 21
// The index of t is 22
// The index of e is 23


console.log('###################')

let myString2 = "Hello World!";

let box = ''

for(let i = 0; i < myString2.length; i++){
/**
 let i = 0 # i(0) < myString2.length(12) ==> true ==> chrInString = H
 ==> box = ''+'H' ==> box = 'H' ==>   console.log('H') ==> i++

 i = 1 # # i(1) < myString2.length(12) ==> true ==> let chrInString= e
 ==> box = 'H' + 'e' ==> console.log('He') ==> i++

 i = 2 # i(2) < myString2.length(12) ==> true ==> let chrInString= l
 ==> box = 'He' + 'l' ==> console.log('Hel') ==> i++
 */

 let chrInString= myString2[i]
 box = box + chrInString

  //console.log(chrInString)
  console.log(box)
}





// H
// He
// Hel
// Hell
// Hello
// Hello
// Hello W
// Hello Wo
// Hello Wor
// Hello Worl
// Hello World
// Hello World!

console.log('###################')

let numbers = [2,3,7,8,9,11,33,55,13]

for(let i = 0 ; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        console.log('even => ',numbers[i])
    }else{
        console.log('odd => ',numbers[i])
    }
    
}




