// COMPARISON OPERATOR ---> Operator yang akan menghasilkan nilai boolean true/false
// >, >=, <, <=, ==, ===, !=

let angka1 = 10;
let angka2 = 20;
console.log(angka1 == angka2); // false

// =---> Assignment operator

let angka3 = 50;
let angka4 = 50;
console.log(angka3 > angka4); // false
console.log(angka3 >= angka4); // true
console.log(angka3 != angka4); // false

let angka5 = 3;
let angka6 = '3';
console.log(angka5 == angka6); // Hanya mengecek value nya saja
console.log(angka5 === angka6); // Selain mengecek value, mengecek tipe datanya

console.log(5 == 5);
console.log('10' === '10');

let angka7 = 10;
let angka8 = 10;
let angka9 = `${angka7}`; // Dianggap sebuah string
console.log(angka8 === angka9);
// Note: String dapat menyimpan 2 bentuk data, alfabet dan numeric

let text1 = 'Aku';
let text2 = 'aku';
console.log(text1 == text2);

// LOGICAL OPERATOR ---> Digunakan untuk compare lebih dari 2 kondisi
// - && (AND)
// - || (OR)
// - ! (NOT)

// && (AND) ---> Salah 1 kondisi bernilai false, maka hasil akhir akan false
//          ---> Dua kondisi harus bernilai true apabila ingin hasil akhir true

let beratBadan = 65;
console.log(beratBadan > 50 && beratBadan < 90); // true && true ---> true
console.log(beratBadan > 65 && beratBadan < 66); // false && true ---> false

// || (OR) ---> Salah 1 kondisi bernilai true, maka hasil akhir akan true
//         ---> Dua kondisi harus bernilai false apabila ingin hasil akhir false
let nilaiModul = 85;
console.log(nilaiModul > 70 || nilaiModul < 90); // true || true ---> true
console.log(nilaiModul >= 84 || nilaiModul < 85); // true || false ---> true

// ! (NOT)
let tinggiBadan = 170;
let result = tinggiBadan > 160 || tinggiBadan < 170; // true || false ---> true
console.log(!result);

let resultFalse = false;
console.log(!resultFalse);
