// Array med 11 nollor, för talen 0-10
let counts = new Array(11).fill(0);

//Rulla 10 000 ggr
for (let i = 0; i < 10000; i++) {
  let roll = Math.floor(Math.random() * 11); // 0-10
  counts[roll]++; // öka räknaren för detta nummer
}

//Resultat
for (let i = 0; i < counts.length; i++) {
  console.log(`I rolled ${i} a total of ${counts[i]} times.`);
}

