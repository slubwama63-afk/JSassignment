// Sandra Lubwama
//1/10-2025
// slubwama63@gmail.com

console.log(
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

let kmPerHour = 72; //input
let metersPerSecond = kmPerHour / 3.6; // conversion
console.log (metersPerSecond); //output : 20

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

/* function calculateCircleArea(radius) {
const pi= Math.PI;
  return pi * radius * radius;
}
const radius = 2;
const area = calculateCircleArea(radius);
const formattedArea = area.toFixed(2);
console.log(formattedArea); */




/*function negateNumber(number){
  return -number;
}
const inputNumber = 11;
const negatedOutput = negateNumber(inputNumber);
console.log(negatedOutput);
*/

/*function calculateBMIweight(weight, height) {
  return weight / (height * height);
}
const weight = 70;
const height = 182;
const BMI = calculateBMIweight(weight, height);
const formattedBMI = BMI.toFixed(2).replace(".", "");
console.log(formattedBMI);
*/

/*
function calculateHypotenuse(a, b){
  return Math.sqrt((a * a) + (b * b));
}
const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(hypotenuse); */

function convertSeconds (totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} minute(s) and second(s) ${seconds}`;
}
const inputSeconds = 111;
const result = convertSeconds(inputSeconds);
console.log(result);



