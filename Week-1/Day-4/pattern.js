// PATTERN

// Ex.
//  *****
let outputPattern1 = '';
for (let i = 0; i < 5; i++) {
  outputPattern1 += '* ';
}
console.log(outputPattern1);

// Ex.
// *
// *
// *
let outputPattern2 = '';
for (let i = 0; i < 3; i++) {
  outputPattern2 += '* \n';
}
console.log(outputPattern2);
// i=0, 0<3? true, outputPattern = *
//                               =
// i=1, 1<3? true, outputPattern = *
//                               =
//                               = *
//                               =
// i=2, 2<3? true, outputPattern = *
//                               =
//                               = *
//                               =
//                               = *
//                               =
// i=3, 3<3? false!!!

// Ex.
//  ***
//  ***
//  ***
let outputPattern3 = '';
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    outputPattern3 += '* ';
  }
  outputPattern3 += '\n';
}

console.log(outputPattern3);

// Ex.
// *****
// *****
let outputPattern4 = '';
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    outputPattern4 += '* ';
  }
  outputPattern4 += '\n';
}
console.log(outputPattern4);

// Ex.
// *
// **
// ***
let outputPattern5 = '';
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    outputPattern5 += '* ';
  }
  outputPattern5 += '\n';
}
console.log(outputPattern5);
