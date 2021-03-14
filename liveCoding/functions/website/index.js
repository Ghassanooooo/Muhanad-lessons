// spa
let htmlElement = document.querySelector(".greeting_text");
let htmlInput = document.querySelector(".get_the_name");
let htmlButton = document.querySelector(".click_button");
//htmlElement.innerHTML = "test";

/*
function changeGreeting() {
  //spa
  htmlElement.innerHTML = "Good Night";
  htmlElement.style.color = "red";

  //console.log("the functions works");
}

//changeGreeting();
*/

//TASK ==> if the name Alex print Hallo Alex how are you?

let names = ["Tommy", "Pilar"];

function greetingAlex() {
  for (i = 0; i < names.length; i++) {
    let nameInArray = names[i];
    console.log("nameInArray ==> ", nameInArray);
  }
}

//greetingAlex();

function onClickButton() {
  let nameFromInput = htmlInput.value; // string
  console.log("nameFromInput🖐 => ", nameFromInput);
  console.log("nameFromInput length🖐 => ", nameFromInput.length);

  // task => the name 3 chr at least!
  if (nameFromInput.length >= 3) {
    names.push(nameFromInput);
  }

  greetingAlex();
  console.log("names => ", names);
  //console.log("nameFromInput ==> ", nameFromInput);
}

htmlButton.addEventListener("click", onClickButton);

/* if (getName == "Alex") {
    htmlElement.innerHTML = "Hallo " + getName + " how are you?";
  } else {
    htmlElement.innerHTML = "Hallo " + getName;
  }*/

// let name = htmlInput.value;
/*greetingAlex(name);*/
// console.log("the event works ==> ", name);
// htmlElement.innerHTML = "Hallo " + nameInArray;
