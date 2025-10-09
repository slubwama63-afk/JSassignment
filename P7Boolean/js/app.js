// Uppgift 1
const birthYear = 1999;
let age = 11;
let isChild = (0 >= age <= 10);
console.log(isChild);

let age2 = 19;
let isTeenager = 10<= age >= 19 ;
console.log(isTeenager);

let age3 = 27;
let isAdult = (age3 >= isTeenager >= isChild);
console.log(isAdult);

// Uppgift 2
let birthYear2 = 2000;
let favoriteNumber = 21;
let isAdult2 = favoriteNumber <= birthYear2;
let age4 =  2025 - birthYear2;
console.log(isAdult2);

if (0 <= age4 && age4 < 10) {
  console.log("You are a child");
} else if (10 <= age4 && age4 < 20){
  console.log("You are a teenager");

} else {
  console.log("You are a adult");
}

//Uppgift 4

let listExample = [1, 2, 3, 4, 5];// kan va bra om man har flera av liknande datortyp exempelvis en talföljd
listExample.forEach(char => console.log(char));
function moveforward (){
  console.log ("forward ");
}
moveforward ();
moveforward ();
moveforward ();

function turnright () {
  console.log ("turnright");

}
turnright ();
turnright ();
moveforward ();
moveforward ();
moveforward ();

turnright ();
turnright ();
turnright ();

moveforward ();
moveforward ();
moveforward ();

turnright ();
turnright ();
turnright ();

moveforward ();

turnright ();
turnright ();

moveforward ();

// Uppgift 5

function doubleNumber(numberToDouble) {
  return numberToDouble * 2;
}
console.log(doubleNumber(2));

function doubleNumber2(numberToDouble) {
  return numberToDouble * 2;
}
console.log(doubleNumber2(8));

function dubbelNumber (number1,number2) {
  return number1 - number2;
}
console.log(dubbelNumber(6,2));

function welcome (firstName, lastName) {
  return "Welcome " + firstName + " " + lastName + "!";
}
console.log(welcome("Ben","Ting"))

function countLetters( name ) {
  return name.length;
}
console.log(countLetters("Michelle Linnea"));

function getCapitalize (firstName, lastName) {
  let first = firstName [0].toUpperCase() + firstName.slice(1). toLowerCase();
  let last = lastName [0].toUpperCase() + lastName.slice(1).toLowerCase();
  return first + " " + last;
}
console.log(getCapitalize("sandra" , "lubwama"));

