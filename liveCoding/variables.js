//console.log("Ghassan");
// JS Variables
// Defining a variable:
// 1. var
// 2. let ***

let firstName = "Ali";
// 'Ali' is string
let lastName = "Ahmad";
// 'Ahmad' is string

console.log(firstName, lastName); // Ali Ahmad

let age = 30;

console.log(firstName, lastName, ". He is :", age, " Years old"); // Ali Ahmad . He is : 30  Years old

let city = "Berlin";

console.log(firstName, lastName, ". He live in: ", city); // Ali Ahmad . He live in:  Berlin

// change the variabes value

firstName = "Alex";

console.log(firstName); // Alex

//################################

let books = 4;

console.log("Books ==> ", books); // Books ==>  4

// person buy 1
books = books - 1;

console.log("Books ==> ", books); // Books ==>  3

// person buy 1
books = books - 1;

console.log("Books ==> ", books); // Books ==>  2

// person buy 2

//??
books = books - 2;
console.log("Books ==> ", books); // Books ==>  0

// admin add 10 books

//??
books = 10;
console.log("Books ==> ", books); // Books ==>  10

// let books = 100; // SyntaxError: Identifier 'books' has already been declared

let Books = 100;

console.log("Books ==> ", books); // Books ==>  10

console.log("All Books ==> ", books + Books); // All Books ==>  110
