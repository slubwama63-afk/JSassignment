// Sandra Lubwama
//1/10-2025
// slubwama63@gmail.com

/*console.log(
  "Heja Dicey!"
);
console.log("First");

console.log("Second");

console.log("this is line 1");
 console.log("this is line 2");
 console.log("this is line 3");
 console.log("this is line 4");
 console.log("this is line 5");
 console.log("this is line 6");

 // det här är en kommentar
/* det här är också en kommentar */





/* const string= "green bottles hanging on the wall";
let numberOfbottles = 10;
const string2 = "And if one green bottle should accidentally fall, there will be" + -- numberOfbottles;


console.log( string + ". " + string2 +); */

/*const string= "Green bottles hanging on the wall";
let numberOfbottles= 10;
let string2 = "And if one green bottle should accidentally fall, there will be";
for (let i = numberOfbottles; 0 <i; i --) {
  if (i !== numberOfbottles) {
    console.log(string2 + i + string);
  }
  console.log(i + string + ". "+string2);
} */



 /* let bool=true;
console.log(bool);
console.log(!bool);

  */

 /* const age= 26;
const birthyear= 1999;
let condition= (age == 26  || birthyear == 1997);
console.log(condition);

function getAge() {
  return age;
}
let ages = getAge(); // första exemplet
console.log(ages);
let results = getAge();

results = 26; // enklare sätt att få ut resultat istället exemplet ovan
console.log(results); */

 /* let bool= false;
bool = !bool;
console.log(bool); */


/* let isGreater = 10 > 9;
console.log(isGreater); */

/* const birthYear = 1999;
let age = 11;
let isChild = (0 >= age <= 10);
console.log(isChild);

let age2 = 19;
let isTeenager = 10<= age >= 19 ;
console.log(isTeenager);

let age3 = 27;
let isAdult = (age3 >= isTeenager >= isChild);
console.log(isAdult); */

  /*const birthYear = 1999;
let age = 9;
let isChild = (0 <= age  && age <= 10);
console.log(isChild);

let age2 = 19;
let isTeenager = 10<= age && age <= 19 ;
console.log(isTeenager);

let age3 = 27;
let isAdult = (19 < age);
console.log(isAdult); */


 /*let birthYear = 2000;
let favoriteNumber = 21;
let isAdult = favoriteNumber <= birthYear;
let age =  2025 - birthYear;
console.log(isAdult);

if (0 <= age && age < 10) {
  console.log("You are a child");
} else if (10 <= age && age < 20){
  console.log("You are a teenager");

} else {
  console.log("You are a adult");
} */


 /*function makeLasgana(){
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}
makeLasgana();
let isHungry = false;
//breakfast
if (isHungry){
  makeLasgana();
}
//lunch
isHungry = true;
if (isHungry){
  makeLasgana();
  makeLasgana();
} */



  // dinner


/*let listExample = [1, 2, 3, 4, 5];// kan va bra om man har flera av liknande datortyp exempelvis en talföljd
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

moveforward (); */

/*let listMove= ["F","F","F","R","R","F","F","F","R","R","R","F","F","F","R","R","R","F","R","R","F"];
listMove.forEach (char=>{
  if (char == "F") {
  console.log ("Move Forward")
} else if (char == "R"){
  console.log ("Turn Right")
  }}
) */

/*function doubleNumber(numberToDouble) {
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

function phrase (originalString, reversedString) {
  let orginalString = "Hello";
  let reversedString = "Olleh"
  return originalString + reversedString;

}
console.log(phrase("Hello" + reversedString"Olleh")); */

/*let kmPerHour = 72; //input
let metersPerSecond = kmPerHour / 3.6; // conversion
console.log (metersPerSecond); //output : 20 */

/*let minutes = 3; //input
let seconds = minutes * 60;
console.log(seconds);

let number1 = 11;
let number2 = 4;
let result = number1/number2;
console.log(result);


let int=10
function myFirstfunction(int){
  console.log(int);
}
myFirstfunction(int)

*/

//uppgift 1
/* function calculateCircleArea(radius) {
const pi= Math.PI;
  return pi * radius * radius;
}
const radius = 2;
const area = calculateCircleArea(radius);
const formattedArea = area.toFixed(2);
console.log(formattedArea); */



//uppgift 2
/*function negateNumber(number){
  return -number;
}
const inputNumber = 11;
const negatedOutput = negateNumber(inputNumber);
console.log(negatedOutput);
*/

//uppgift 3
/*function calculateBMIweight(weight, height) {
  return weight / (height * height);
}
const weight = 70;
const height = 182;
const BMI = calculateBMIweight(weight, height);
const formattedBMI = BMI.toFixed(2).replace(".", "");
console.log(formattedBMI);
*/

//uppgift 4
/*
function calculateHypotenuse(a, b){
  return Math.sqrt((a * a) + (b * b));
}
const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(hypotenuse); */

//uppgift 5

/* function convertSeconds (totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} minute(s) and second(s) ${seconds}`;
}
const inputSeconds = 111;
const result = convertSeconds(inputSeconds);
console.log(result); */


// Step 1: Character Setup
const playerName = "Sandri";
let playerAge = 16;
let rightHand = "sword";
let leftHand = "shield";

// Step 2: Functions
function checkEligibility(age) {
  if (age < 12) {
    return "Too young to start the adventure!";
  } else {
    return "You are ready for the quest!";
  }
}

function chooseEquipment(rightHand, leftHand) {
  if (rightHand && leftHand) {
    return "You are armed with a " + rightHand + " and a " + leftHand + "!";
  } else if (rightHand) {
    return "You only have a " + rightHand + ".";
  } else if (leftHand) {
    return "You only have a " + leftHand + ".";
  } else {
    return "You are unarmed! Be careful!";
  }
}

// Step 3: Conditions & Booleans
function startingLocation(age) {
  if (age < 12) {
    return "You start in your house.";
  } else if (age >= 12 && age <= 17) {
    return "You start in beginners forest.";
  } else {
    return "You start in a dark dungeon.";
  }
}

//Step 5 Bonus
function rollDice() {
  return Math.floor(Math.random() *6) + 1;
}
//Step 4
function main(name, age, rightHand, leftHand) {
  console.log("Welcome, " + name + " ! ");
  console.log(checkEligibility(age));
  console.log(startingLocation(age));
  console.log(chooseEquipment(rightHand, leftHand));
}

main(playerName, playerAge, rightHand, leftHand);


// Bonus: slå tärning
let dice = rollDice();
console.log("You rolled a " + dice + ".");
if (dice >= 4) {
  console.log("A monster appears!");
} else {
  console.log("The path is clear... for now.");
}



































































