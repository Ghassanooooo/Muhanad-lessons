// objects
// Array==> []
// Object==> {} key: value

const user = {
  name: "Alex",
  age: 30,
  email: "alex@gmail.com",
};
console.log(user); // { name: 'Alex', age: 30, email: 'alex@gmail.com' }
console.log(user.email); // alex@gmail.com

user.isAdmin = false;

console.log(user);
// { name: 'Alex', age: 30, email: 'alex@gmail.com', isAdmin: false }

console.log(
  "Hi my name is " + user.name + " iam " + user.age + " my email ",
  user.email
);

// Hi my name is Alex iam 30 my email  alex@gmail.com

const person = {
  name: {
    first_name: "John",
    last_name: "Doe",
  },
  age: 32,
  address: {
    strNum: 55,
    strName: "Berliner str",
    pinCode: 12334,
    country: "Germany",
    city: "Berlin",
  },
  companiesWorkedWith: {
    name: "dci",
    duration: "2years",
    year: 2023,
  },
};

/**
 John Doe
 Berliner str 55
 12334 Berlin
 Germany
 */
console.log(person.name.first_name, person.name.last_name);
console.log(person.address.strName, person.address.strNum);
console.log(person.address.pinCode, person.address.city);
console.log(person.address.country);
