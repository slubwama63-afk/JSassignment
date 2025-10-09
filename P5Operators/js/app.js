//Uppgift 1
let kmPerHour = 72; //input
let metersPerSecond = kmPerHour / 3.6; // conversion
console.log (metersPerSecond); //output : 20


//Uppgift 2
let minutes = 3; //input
let seconds = minutes * 60;
console.log(seconds);

// Uppgift 3
const num1 = 11;
const num2 = 4;

// Beräkna divisionen
const result = num1 / num2;

// Visa resultatet i konsolen
console.log("Division result:", result);

// Uppgift 4
const number1 = 11;
const number2 = 4;

// Beräkna resten av divisionen
const remainder = number1 % number2;

// Visa resultatet i konsolen
console.log("Remainder:", remainder);

//Uppgift 5
// Input
const radius = 2;

// Beräkna arean (Math.PI ≈ 3.14159)
const area = Math.PI * Math.pow(radius, 2);

// Visa resultatet
console.log("Area of the circle:", area);

//Uppgift 6
function negateNumber(number){
  return -number;
}
const inputNumber = 11;
const negatedOutput = negateNumber(inputNumber);
console.log(negatedOutput);

//Uppgift 7
// Input
const weight = 67;   // kg
const height = 1.66; // meter

// Beräkna BMI
const bmi = weight / Math.pow(height, 2);

// Visa resultatet (avrundat till 2 decimaler)
console.log("BMI:", bmi.toFixed(2));

//Uppgift 8
function calculateHypotenuse(a, b){
  return Math.sqrt((a * a) + (b * b));
}
const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(hypotenuse);

//Uppgift 9
function convertSeconds (totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} minute(s) and second(s) ${seconds}`;
}
const inputSeconds = 111;
const timeResult = convertSeconds(inputSeconds);
console.log(timeResult);




