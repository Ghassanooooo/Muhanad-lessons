// Map + Arrays
//  Loop
const myArr = [1, 2, 3, 66, 8, 9];

myArr.includes(6); // false
myArr.includes(9); // true

myArr.map(function (item) {
  console.log(item + 2);
});

/**
3
4
5
68
10
11
 */

const names = ["Tommy", "Alex", "Max", "Ghassan"];

names.map(function (item) {
  console.log("Hallo " + item);
});

/**
Hallo Tommy
Hallo Alex
Hallo Max
Hallo Ghassan
 */
