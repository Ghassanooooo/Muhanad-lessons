// LOGICAL OPERATORS
// &&  ==> and  looking for false
// ||  ==> or looking for true

// 1- and (&&)
console.log(1 == 1 && 2 == 1);
console.log(3 > 6 && 1 == 1);
console.log("hallo" && true);
console.log("hallo" && true && "Alex");
console.log("" && false);

// hidden booleans
//A- false

// "" or '' or `` ==> false
// 0 ==> false
// undefined ==> false
// null ==> false
// false ==> false

console.log(" " && 0 && false); // 0
console.log(1 && "hallo" && undefined && false); // undefined
console.log(1 && null && undefined && false); // null
console.log(1 && -2 && "0" && false); // false

//##########################
// 2- or (||)

console.log(" " || 0 || false);

console.log(undefined || "0" || 0 || true);

console.log((" " && 0) || false);

console.log((" " && 0) || (false && true));

console.log(("" && 0) || (true && 0));
console.log("" && 0 && true && 0);
console.log(("" && 0 && true) || 0);
console.log(("A" && 0 && true) || 0);
