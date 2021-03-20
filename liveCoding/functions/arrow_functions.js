// Arrow functions  () =>

function greeting() {
  return "Hallo Alex!";
}

console.log("greeting() ", greeting()); // Hallo Alex!

const saySometing = function () {
  return "Today nice weather!";
};

console.log("saySometing ", saySometing()); //Today nice weather!

// ES6
// =>   right
// <=  wrong

const name = () => {
  return "How are you Max!";
};

console.log("name ", name()); //  How are you Max!

const opt = (num_1, num_2) => {
  return num_1 + num_2;
};

console.log("opt ", opt(8, 7)); // 15

console.log("opt ", opt()); // NaN

console.log("opt ", opt(10, 1)); // 11
