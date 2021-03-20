// ES6 switch

let name = "Alex";

if (name == "Alex") {
  console.log("Good morning Alex");
}

if (name == "Tommy") {
  console.log("How are you Tommy");
}

if (name == "Max") {
  console.log("GoodEvening Max");
}

// switch

switch (name) {
  case "Alex":
    console.log("Good morning Alex");
    break;
  case "Tommy":
    console.log("How are you Tommy");
    break;
  default:
    console.log("No names!");
}
