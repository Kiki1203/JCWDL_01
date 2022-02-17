//  DATA TYPES / TIPE DATA
//  1. Masing-masing tipe data memiliki behaviour masing-masing (sifat masing-masing)
//  2. Masing-masing tipe data memiliki method (method semacam senjata untuk memnipulasi data)

// Tipe data dibagi menjadi 2:
//  Tipe data primitive : String, Number, Boolean, Undefine, Null
//  Tipe data references : Array, Object, Date Object, dll

// 1. STRING ---> Tipe data yang berbentuk teks, ciri-cirinya selalu diapit dengan '....', "...", `....`
let nama = 'Asyah';
nama = 'Kiki';
nama = `Rian`;
console.log(nama);

let usia = '20'; // String karena diapit dengan '...'
console.log(typeof usia); // // typeof diguanakn untuk membuktikan tipe data didalam variable

// 2. NUMBER ---> Tipe data yang berbentuk number
let angka = 10;
let discount = 12.5; // Floating Number (Bilangan Pecahan)

// 3.BOOLEAN ----> Tipe data yang valuenya bernilai true/false
let x = true;
let y = false;
console.log(typeof x);
console.log(typeof y);

// 4. UNDEFINED --->  Merupakan tipe data yang tidak terdefinisi (Ex. Ketika declare variable tanpa assign apapun)
let namaku;
// namaku = 'kiki'; // Jadi string
console.log(typeof namaku);

// 5.NULL ----> Merupakan tipe data yang kosong
let nilai = null;
console.log(nilai);
console.log(typeof nilai); // jadi object

// Program untuk mendapatkan nilai student
// let nilai = null

// ...
// ...
// ...
// nilai = 100

// Cont. String
let number1 = '10';
let number2 = '20';
console.log(number1 + number2);

let number3 = '30';
let number4 = '40';
let output1 = number3 + number4; // Di concate / Digabungin
let output2 = number3 - number4; // Pengurangan
console.log(output1);
console.log(output2);

let nama1 = 'Ryan';
let nama2 = 'Defryan';
console.log(nama1 + nama2);
console.log(nama1 - nama2); // NaN (Not a Number)

// String Template Literal ---> Harus diapit dengan `...`
let namaStudent = 'Kevin';
let asalStudent = 'Jakarta';
let perkenalan = 'Nama Saya ' + namaStudent + ', Asal Saya ' + asalStudent;
let perkanalanStringLiteral = `Nama Saya ${namaStudent}, Asal Saya ${asalStudent}`;
console.log(perkenalan);
console.log(perkanalanStringLiteral);

// Cont. NUMBER ---> Kita bisa melakukan operasi aritmatika (+, -, *, /, % mod)
let angkaPertama = 10;
let angkaKedua = 100;
console.log(angkaPertama + angkaKedua);
console.log(angkaPertama - angkaKedua);
console.log(angkaPertama * angkaKedua);
console.log(angkaPertama / angkaKedua);

// Mod / Sisa Bagi
console.log(4 % 2); // 0
console.log(10 % 3); // 1
console.log(11 % 2); // 1
