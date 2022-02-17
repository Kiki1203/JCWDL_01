//  FUNCTION
// Blok of code / sekumpulan baris yang memilki nama dan dapat digunakan berulang-ulang (reusable)

// Case. Tampilkan kata Javascript sebanyak 3x

// let kata = 'Javascript'
// for(let i=0; i<3; i++){
//     console.log(kata);

// }
//...
//...
//...
// for(let i=0; i<3; i++){              // tidak efisien maka gunakan function
//     console.log(kata);

// }
//...
//...
//...
// for(let i=0; i<3; i++){
//     console.log(kata);

// }

// Syntax :
//      function namaFunction(){
//Blok of code

//  }

// Tahapan membuat function :
//          - Build ---> Buat function 1x
//          - Call ----> Bisa gunakan function nya secara berulang-ulang

function printPesan() {
  let kata = 'Javascript';
  for (let i = 0; i < 3; i++) {
    console.log(kata);
  }
}
printPesan();
//...
//...
//...
printPesan();

// 2 Tipe Function :
//          - Function Declaration

Declaration();
function Declaration() {
  console.log('Function Declaration');
}

//      - Function Expression
// expression()
let expression = function () {
  // anonymous Function
  console.log('Function Espression');
};

let arrowFunction = () => {
  // Anonymous function
  console.log('arrow function');
};

Declaration();
expression();
arrowFunction();

//  Ex. Buatlah function untuk menampilkan data diri
function dataDiri() {
  console.log('nama saya defry');
  console.log('hoby saya Sepakbola');
  console.log('asal saya jawa barat');
}
dataDiri();

// FUNCTION WITH PARAMETER
// Function yang menerima argument/inputan dari luar
// karena memiliki parameter, membuat function lebih flesibel
function dataDiriNew(nama, hobi, asal) {
  console.log(`Nama Saya ${nama}`);
  console.log(`Hoby Saya ${hobi}`);
  console.log(`Asal Saya ${asal}`);
}
dataDiriNew('kevin', 'sepakbola', 'jawa tengah');
// Ex. Buatlah function untuk menjumlahkan 2 buah bilangan

function penjumlahan(angka1, angka2) {
  console.log(angka1 + angka2);
}

penjumlahan(2, 3); // Direct argument

let x = 2;
let y = 3;

penjumlahan(x, y); // Indirect argument

// FUNCTION WITH DEFAULT PARAMETER
// fungsinya : Untuk mengantisipasi apabila function yang kita buat tidak menerima argument / inputan

// function sapa(nama = 'Anonymous') {
//   console.log(`hello, ${nama}`);
// }
// sapa('Rian');
// sapa();

// Ex. Function inside scope
if (1 < 2) {
  function sapa() {
    console.log('hai, student purwadhika!');
  }
}

sapa();
