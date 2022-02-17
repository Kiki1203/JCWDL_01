// SWAP STRING
// Ex. Makan Hati ---> Hati Makan

let kata = 'Makan Hati';

// Step1. Convert dalam bentuk array
let kataToArr = kata.split(' '); // ['Makan', 'Hati']

// Step2. Tampilkan output
let output = kataToArr[1] + ' ' + kataToArr[0];

console.log(output);
