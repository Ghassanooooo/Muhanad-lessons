// if else

let numOne = 5
let numTwo = 3

if(numOne > numTwo){
    console.log('Number one is bigger then number 2')
}else{
    console.log('Number one is smaller then number 2') 
}

/**
 Number one is bigger then number 2
 */

 //#######################


let numOne_1 = 5
let numTwo_2 = 10

if(numOne_1 > numTwo_2){
    console.log('Number one is bigger then number 2')
}else{
    console.log('Number one is smaller then number 2') 
}

/**
Number one is smaller then number 2
 */

 //#############################

 let yourBankAccount = 200

 let moneyToGet = 150

 if(yourBankAccount >= moneyToGet){
     let rest = yourBankAccount - moneyToGet
     console.log('You get your money :)')
     console.log(`You have ${rest} Euro`)
 }else{
    console.log('You dont have enough money!') 
 }

 //##############

 /**
  6 - 11:59 Good morning
  12 - 18 good evening

  18:01 - 5:59 Good night
  */

let time = 19

if(time >= 6 && time < 12){
    console.log('Good morning')
}
if( time >= 12 && time <= 18){
    console.log('Good evening')
}else{
    console.log('Good night')
}

//##########


// test the number if even or odd
// if even ==> print in console 'the number is even'
// if odd ==> print in console 'the number is odd'


let num = 5

/**
 * 
 * even
 6 % 2 
 6 - 2 = 4
 4 - 2 = 2
 2 - 2 = 0

 * odd
 5 - 2 = 3
 3 - 2 = 1

 */

if(num % 2 == 0){
    console.log('the number is even')
}else{
    console.log('the number is odd')  
}


// Ternary Operator

// Conditionals ? answer 1 : answer 2

num % 2 == 0 ? console.log('the number is even') :  console.log('the number is odd')  
  
// ##################

let age = 30

// if the age smaller then 18 print access not allowed

if( age < 18){
    console.log('access not allowed')
}else{
    console.log('access is allowed')
}


//##################



// sunny ==>  Don't forget your sunglasses!
// cloudy ==> Don't forget your umbrella!
// not all ==> enjoy the weather

let weather = "hot";
// sunny ==>  Don't forget your sunglasses!
// cloudy ==> Don't forget your umbrella!
// not all ==> enjoy the weather
if(weather == "sunny")
{console.log("Don't forget your sunglasses!")}
else if (weather== "cloudy")
{console.log("Don't forget your umbrella!")}


else {
console.log("enjoy the weather")}