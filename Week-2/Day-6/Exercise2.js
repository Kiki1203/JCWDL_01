// MERGE 4 DIGIT
// Ex. 35 & 22 ---> 3252

let angka1 = 351;
let angka2 = 225;

let angka1ToStr = angka1.toString(); // '351'
let angka2ToStr = angka2.toString(); // '225'

let output = '';
for (let i = 0; i < angka1ToStr.length; i++) {
  output += angka1ToStr[i];
  output += angka2ToStr[i];
}
console.log(output);

// i = 0, 0<3? true ---> output += angka1ToStr[0]; output += angka2ToStr[0]
// i = 1, 1<3? true ---> output += angka1ToStr[1]; output += angka2ToStr[1]
// ...
// ...
// ...
