// ES6

// rest params

const numbers = (num_1, num_2, num_3, ...theRestParams) => {
  return `${num_1} ${num_2} ${num_3} ${theRestParams}`;
};

console.log("numbers ", numbers(2, 5, 7, 99, 88, 100));

// Destructuring

const myArray = ["Alex", "Tommy", "Max"];

const [firstItem, secondItem, test] = myArray;

console.log(firstItem); // Alex
console.log(secondItem); // Tommy
console.log(test); // Max
