// LOOPING STATEMENT
// Kadang kita ingin mengeksekusi sebauh code yang sama secara berulang-ulang

// let kata = 'Hello, World!'
// console.log(kata)
// console.log(kata)
// console.log(kata)
// console.log(kata)
// console.log(kata)

// WHILE ---> Cek kondisi terlebih dahulu, baru jalankan action
// Syntax :
//  while(condition is true){
//      action
//      exit way
//}

let kata = 'hello, world!';
let start = 0; // Initial condition
while (start < 10) {
  // true ---> true ---> true ---> true ---> true ---> true
  console.log(kata);
  start++; // Increment (start += 1)
}

// Note : Looping yang jalan secara terus menerus tanpa henti disebut Infinite Loop

let angka = 1; // 1 ---> 2 ---> 3 ---> 4

while (angka <= 3) {
  // true -> true -> true -> false
  console.log(angka); // 1x -> 2x -> 3x
  angka++; // Mengupdate variable angka supaya dia tidak infinite loop
}

// DO WHILE ---> Kita jalankan action telebih dahulu, baru cek condition
// Syntax :
//  do{
//      action
//      exit way
//}while(condition)

let number = 1; // 1 ---> 2

do {
  console.log(number);
  number++;
} while (number < 1); // false

// Case. While vs. Do While
let numbers = 10;
while (numbers < 5) {
  console.log(numbers);
  numbers++;
}

do {
  console.log(numbers);
  numbers++;
} while (numbers < 5); // 11<5? false!

// FOR LOOP
// Syntax :
//  for(initial condition; condition; exit way){
//      action
//}

for (let i = 0; i <= 2; i++) {
  console.log(i);
}

for (let nama = 'Ryan'; nama.length < 6; nama += 'n') {
  // Ryan -> Ryann -> Ryannn
  console.log(nama); // 1x Ryan -> 2x Ryann
}

let point = 3;
while (point < 100) {
  point--; // Decrement
  console.log(point);
}
