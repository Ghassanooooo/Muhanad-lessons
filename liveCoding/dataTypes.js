// Data types
// Group A ==> simple data types ==> string, numbers, boolean(true or false), undefined, null

// 1- string
let name = "Alex"; // string ==> " ", ' ', ``
let age = "30"; // string
let number = "40"; // string

console.log("age + number ==> ", age + number);

//############################

let myString = "It  is a beautiful day!";

console.log("myString ==> ", myString); //myString ==>  It is a beautiful day!
console.log("myString.length ==> ", myString.length); // myString.length ==>  23

// string.length ==> start from 1

let myString_2 = "a";
console.log(myString_2.length); // 1

// INDEX ==> chr location ==> index start from 0 TO length - 1

// let myString = "It  is a beautiful day!";

console.log(myString[1]); // t
console.log(myString[12]); // u
console.log(myString[7]); // a

console.log(myString);

//myString[7] = "$$";

//console.log(myString);

let myString_3 = "It  is a beautiful day!66zu$";

console.log(myString_3.length - 1); // 27

console.log(myString_3[myString_3.length - 1]);
console.log(myString_3[myString_3.length - 2]);
//#####################################################

// 2- numbers ==> 1,3,5,-4,-6,4.7,0.8

let number_1 = 30;
let number_2 = 50;

console.log(number_1 + number_2); // 80
console.log(number_1 - number_2); // -20
console.log(number_1 * number_2); // 1500
console.log(number_1 / number_2); //0.6

// % ==> module

console.log(8 % 2); // 8 - 2 = 6 - 2 = 4 - 2 = 2 - 2 = 0 ==> 8 is even
console.log(9 % 2); // 1 ==> 9 odd

// 99 % 2 ==> 1
// 102 % 2 = 0

// 9 % 3 = 0
// 13 % 4 = 1

//###################################################################

// 3- boolean true or false

let isAdmin = true;
let myBoolean = false;

//########################################

// 4- undefined

let firstName = undefined;

console.log(firstName);

//###########################
// 5- null ==> empty

let city = null;

console.log(city);

//------------------------------------------------------------

// Group B ==> Complex data types ===> Arrays, objects

//1- arrays [ 1,2,'HALLO', false,null,[1,2,3,4] ]

//2- objects { } // key: value

let product = {
  name: "T-shirt",
  brand: "nike",
  size: "m",
  color: "red",
};

console.log(product); // { name: 'T-shirt', brand: 'nike', size: 'm', color: 'red' }

//-------------------------------------------
