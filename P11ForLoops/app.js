
/*let numberOfPeople = 18;
for (let i = 0; i < numberOfPeople; i++) {
  console.log(" God morgon! ");
}
for (let i = 0; i <= 5; i++){
  console.log(i);
} */


for (let i =0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
}

let number = 1;

for (let i = 0; number <= 1024; i++) {
  console.log(number);
  number = number * 2;
}

for (let i=10; i >= 0; i--) {
  console.log(i);
}

function power(base, exponent) {
  return base ** exponent;
}
let result = power(4, 24);
console.log(result);

for (let i = 999; i > 989; i--) {  // kör bara 10 verser
  console.log(`${i} green bottle${i > 1 ? 's' : ''} hanging on the wall`);
  console.log(`And if one green bottle should accidentally fall,`);
  console.log(`There'll be ${i - 1} green bottle${i - 1 === 1 ? '' : 's'} hanging on the wall.`);
  console.log(''); // för mellanrum
}

