const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];
console.log("myArr1 ==> ", myArr);

myArr[0] = "Spain";
console.log("myArr2 ==> ", myArr);

myArr[1] = "item1";
console.log("myArr3 ==> ", myArr);

myArr.pop();
console.log("myArr4 ==> ", myArr);

myArr[2] = "SET item2";
console.log("myArr5 ==> ", myArr);

myArr[3] = ["Berlin", "subSubItem1"];
console.log("myArr6 ==> ", myArr);

myArr.push("Germany");
console.log("myArr7 ==> ", myArr);
