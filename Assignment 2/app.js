// Step 1: Character Setup
const playerName = "Sandra";
let playerAge = 12;
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
