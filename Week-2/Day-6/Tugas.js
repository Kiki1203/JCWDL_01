let a = 95;
let b = 36;
let array = [].concat(a, b);
array.reverse(1);
console.log(array);

let a1 = 12;
let b1 = 34;
let array1 = [].concat(a1, b1);
array.reverse(1);
console.log(array1);

// let x = 35;
// let y = 24;
// let array2 = [].concat(x, y);

// let x1 = 22;
// let y1 = 79;
// let array3 = [].concat(x1, y2);

let text1 = 'Makan Hati';
let textSplit = text1.split('Hati');
[textSplit[0], textSplit[textSplit.length - 1]] = [textSplit[textSplit.length - 1], textSplit[0]];
let swappedString1 = textSplit.join('Hati ');
console.log(swappedString1);

let text2 = 'Makan Bang!';
let textsp = text2.split('Bang!');
[textsp[0], textsp[textsp.length - 1]] = [textsp[textsp.length - 1], textsp[0]];
let swappedString2 = textsp.join('Bang!');
console.log(swappedString2);

let chart = 'Purwadhika';
let removeA = chart.substring(0, 9);
console.log(removeA);

let chart2 = 'Pemrograman javascript';
let removeE = chart2.replace('e', '');
console.log(removeE);
