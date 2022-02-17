// METHOD
// String : https://www.w3schools.com/js/js_string_methods.asp
let caption = 'Belajar Bahasa Pemrograman Javascript';
console.log(caption.length); // panjang karakter/index
console.log(caption.indexOf('m')); // Mencari karakter m berada di index ke berapa? (index di hitung mulai dari 0)
console.log(caption.slice(0, 3)); // Mengambil karakter dari index ke-... sampai index ke...(index paling terakhir, tidak diikutkan)
console.log(caption.substring(0, 3)); // Mengambil karakter dari index ke-... sebanyak 3 karakter

// Number : https://www.w3schools.com/js/js_number_methods.asp

let number = 10.113;
console.log(number.toFixed(0)); // 0 = tidak ada angka setelah (,)
console.log(number.toFixed(6)); // 0 = menambah 6 angka setelah (,)

let numberToString = number.toString(); // Mengkonversi angka menjadi string
console.log(typeof numberToString); // typeof = memeriksa type data

// Case. Membuat program untuk mengabil 3 angka pertama dati nomor hp
// step 1. kita ubah dulu number menjadi string
//      2. Ambil 3 string pertama menggunakan substring
let nomorHp = 628122888899;

// step 1.
let nomorHpTostring = nomorHp.toString();

//step 2.
let tigaAngkapertama = nomorHpTostring.substring(0, 3);

console.log(tigaAngkapertama);
