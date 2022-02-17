// ECMASCRIPT

// 1. Ternary Operator
// Merupakan shortcut dari conditional statement

// Case. Buatlah program untuk menentukan bilangan genap atau ganjil
let number = 20;
// if(number % 2 === 0){
//     console.log('Bilangan Genap')
// }else{
//     console.log('Bilangan Ganjil')
// }

// Condition? Action if true : Action if false
number % 2 === 0 ? console.log('Bilangan Genap') : console.log('Bilangan Ganjil');
number % 2 === 0 && number > 10 ? console.log('Bilangan Genap Lebih Dari 10') : console.log('Bilangan Ganjil');

// Case. Buatlah program untuk menentukan apakah dia bilangan negatif, positif atau nol
let angka = 10;
if (angka < 0) {
  console.log('Bilangan Negatif');
} else if (angka === 0) {
  console.log('Bilangan Nol');
} else {
  console.log('Bilangan Positif');
}
angka < 10 ? console.log('Bilangan Negatif') : angka === 0 ? console.log('Bilangan Nol') : console.log('Bilangan Positif');

let nilai = 90;
if (nilai <= 70) {
  console.log('Remedial');
} else if (nilai <= 80) {
  console.log('Pas');
} else if (nilai <= 90) {
  console.log('Bagus');
} else {
  console.log('Bagus Sekali');
}

nilai <= 70 ? console.log('Remidial') : nilai <= 80 ? console.log('Pas') : nilai <= 90 ? console.log('Bagus') : console.log('Bagus Sekali');

// 2. Arrow Function
//      - Apabila parameternya hanya 1, maka boleh menggunakan (...) / tidak pakai
//      - Jika block code nya hanya 1 baris, maka dia otomatis nge-return
//      - Jika block code nya lebih dari 1 baris, maka kita harus menggunakan {...}

// Case. Buatlah fungsi untuk menentukan apakah bilangan tersebut habis dibagi 5
// let Mod5 = (input) => input % 5 === 0? true : false
// console.log(Mod5(5))

let Mod5 = (input) => {
  if (input % 5 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
Mod5(5);

// 3. Spread Operator ---> ...
// Reference Copy vs. Full Copy

// Reference Copy
let arrLama = [1, 2, 3];
let arrBaru = arrLama; // [1, 2, 3]
arrBaru[0] = 10;
console.log(arrLama);
console.log(arrBaru);

// Full Copy
let arrOriginal = ['A', 'B', 'C'];
let arrCopy = [...arrOriginal]; // ['A', 'B', 'C']

arrCopy[0] = 'Z';
console.log(arrOriginal);
console.log(arrCopy);

let objOriginal = {
  nama: 'Kevin',
  hobi: 'Ngoding',
};

let objRefCopy = { ...objOriginal };
objRefCopy.nama = 'Haekal';
console.log(objOriginal);
console.log(objRefCopy);

let dataLama = {
  nama: 'Aisyah',
  umur: 17,
  student: 'Purwadhika BSD',
  hobi: 'Ngoding',
};

let dataBaru = { ...dataLama, student: 'Purwadhika JKT', asal: 'Jawa Timur' };
console.log(dataBaru);

// Hight Order Function
// Function yg memiliki callback
//  .forEach, .map, .filter
