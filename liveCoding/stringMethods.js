// string methods

// EX:
let str1 = "hallo world";
console.log("str1.length ==> ", str1.length); //  11

// .length ==> property

//#########################################
// methods ==> .key + ()

// 1- indexOf(chr)  ==> string + .indexOf()

let info = "my name is Alex";
console.log('info.indexOf("a") ==> ', info.indexOf("a")); //4
console.log('info.indexOf("me") ==> ', info.indexOf("me")); // 5
console.log('info.indexOf("is") ==> ', info.indexOf("is")); // 8

//#################################

// 2- includes(chr) ==> string + .includes()

let person = "Ali come from Jorden";
console.log('person.includes("from") ==> ', person.includes("from")); // true

console.log(person.includes("ali")); // false
console.log(person.includes("Ali")); //true

//#################################

// 3- slice(start, end)
// It takes 2 parameters: the start position and the end position(end is not included)

let fruits = "Apple, Banana, Kiwi";

console.log(fruits.slice(7, 14)); // Banana,

console.log(fruits.indexOf("Banana,")); // 7

let myName = "Hallo my name is Jon and Iam 30 years old";

let ageIndex = myName.indexOf("30 years old");

console.log(ageIndex); // 29

console.log(myName.slice(ageIndex, 37)); // 30 years

//####################################
//4- replace()
// The replace() method replaces a specified value with another value in a string

let myName_2 = "Hallo my name is Tommy and Iam 30 years old";

console.log(myName_2); // Hallo my name is Tommy and Iam 30 years old

console.log(myName_2.replace("30", "35")); // Hallo my name is Tommy and Iam 35 years old

console.log(myName_2.replace("Tommy", "Ali")); // Hallo my name is Ali and Iam 30 years old

//#####################################
// CONVERTING TO UPPER CASE & LOWER CASE

//5 - toUpperCase()
//6 - toLowerCase()

let myName_3 = "Hallo my Name is Tommy and IAm 30 years old";

console.log(myName_3.toUpperCase()); // HALLO MY NAME IS TOMMY AND IAM 30 YEARS OLD

console.log(myName_3.toLowerCase()); // hallo my name is tommy and iam 30 years old

//######################################

// 7- trim()
// The trim() method removes whitespace from both sides of a string

let myStr_1 = "   Hallo world  ";

console.log(myStr_1);
console.log(myStr_1.length);
console.log(myStr_1.trim());

//######################################
//8- charAt()
// The charAt() method returns the character at a specified index (position) in a string

let myStr_2 = "Its nice day";

console.log(myStr_2[4]); // n

console.log(myStr_2.charAt(4)); // n

console.log(myStr_2.charAt(9)); // d

//####################################

// 9- split()

// CONVERT A STRING TO AN ARRAY
// split()
// A string can be converted to an array with the split() method.
// Arrays are comma separated values. Arrays are mutable.
// This is an array: [1, 2, 3, "abcd", true, null, undefined]

let myStr_3 = "It is a beautiful day today!";

console.log(myStr_3); // It is a beautiful day today!

let strToArr = myStr_3.split(" ");

console.log(strToArr); // [ 'It', 'is', 'a', 'beautiful', 'day', 'today!' ]

/*
let revArray = strToArr.reverse();

console.log(revArray); // [ 'today!', 'day', 'beautiful', 'a', 'is', 'It' ]

console.log(revArray.join(" ")); // today! day beautiful a is It
*/

let txt6 = "Hello Class 'FBW32'"; // Input

// output ==> ['H', 'e', 'l', 'l', 'o',' ', 'C', 'l', 'a', 's','s', ' ', 'F', 'B', 'W','3', '2']

console.log(txt6.split(""));
/*
[
    'H', 'e', 'l', 'l', 'o',
    ' ', 'C', 'l', 'a', 's',
    's', ' ', "'", 'F', 'B',
    'W', '3', '2', "'"
  ]
  */

console.log(txt6.split("s")); // [ 'Hello Cla', '', " 'FBW32'" ]

console.log(txt6.split(" ")); // [ 'Hello', 'Class', "'FBW32'" ]

// Tasks:
let txt2 = "1a1b1c1d1e1";
console.log(txt2); // "1a1b1c1d1e1"
console.log(txt2.split("1")); // [ '', 'a', 'b', 'c', 'd', 'e', '' ]
let txt3 = "abc def ghi";
console.log(txt3.split(" ")); // [ 'abc', 'def', 'ghi' ]
let txt4 = "abc-def-ghi";
console.log("?? ==> ", txt4.split("-")); // [ 'abc', 'def', 'ghi' ]
let txt5 = "a,b,c,d,e";
console.log(txt5); // a,b,c,d,e
console.log(txt5.split(" ")); // [ 'a,b,c,d,e' ]: String inside an array
console.log(txt5.split(",")); //  [ 'a', 'b', 'c', 'd', 'e' ]
