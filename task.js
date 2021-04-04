let word = "Anna";

let wordToArray = word.toLowerCase().split("").reverse();

if (word.toLowerCase() == wordToArray.join("")) {
  console.log(true);
} else {
  console.log(false);
}
