// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }

//let log = console.log

function printMessage() {
  console.log("Welcome to functions!");
  //'Welcome to functions!'
}

printMessage(); // Welcome to functions!
//printMessage()
//printMessage()
//printMessage()
//printMessage()

console.log(printMessage()); // Welcome to functions! + undefined
// the function returns nothing

function printMessage_2() {
  return "Good day!";
}

console.log(printMessage_2()); // Good day!

/*############################# */

//1- change environment

let name = "Ghassan";

//name = 'Alex'

function changeName() {
  name = "Alex";
}
console.log(changeName()); // undefined

console.log("name ==> ", name);

// Muhanad EX

/**+++++++++++++++++ */
//2- return value

function saySomething() {
  return "Hallo world!";
}

console.log("saySomething ==> ", saySomething()); // saySomething ==>  Hallo world!

/**+++++++++++++++ */
//3- change environment and returns value

let greeting = "Good morning!";

function changeGreeting() {
  //change environment
  greeting = "Good night!";
  // returns value
  return "The time now 22:00";
}

console.log("changeGreeting() ==> ", changeGreeting()); // changeGreeting() ==>  The time now 22:00

console.log("greeting ==> ", greeting); // greeting ==>  Good morning
