// Array
// Arrays ==> ColleCtion RefeRenCe type 💾

let arr1 = ["item 1", "item 2", 99, null];

let str = "hallo world";
console.log("str.length ==> ", str.length);
console.log("str[6]", str[6]);

/** array length */

console.log("arr1.length ==> ", arr1.length);
console.log("arr1[1] ==> ", arr1[1]);

console.log("arr1[1][2] ==> ", arr1[1][2]);

/** 3 levels */

let school = [
  ["Max", "Ali"],
  ["Alex", "Tommy", "Maro"],
  ["Pilar"],
  "TEST",
  "test 2",
];

console.log("school[1]", school[1]); // [ 'Alex', 'Tommy', 'Maro' ]
console.log("school[1][1] ==> ", school[1][1]); //Tommy

console.log("school[1][0][3] ==> ", school[1][0][3]);

/** last item in a array with length */
console.log(school.length - 1); // 3
console.log("school[3] ==> ", school[3]); // TEST
console.log("school[school.length - 1] ==> ", school[school.length - 1]); // TEST

/** change a array */

let array_test = ["A", "B", "C"];

console.log("array_test ==> ", array_test); //[ 'A', 'B', 'C' ]

array_test[1] = "Hallo";

console.log("array_test ==> ", array_test); //  [ 'A', 'Hallo', 'C' ]
