const string= "Green bottles hanging on the wall";
let numberOfbottles= 10;
let string2 = "And if one green bottle should accidentally fall, there will be";
for (let i = numberOfbottles; 0 <i; i --) {
  if (i !== numberOfbottles) {
    console.log(string2 + i + string);
  }
  console.log(i + string + " . "+string2);
}
