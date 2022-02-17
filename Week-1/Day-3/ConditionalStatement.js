// CONDITIONAL STATEMENT
// Kadang dalam program kita butuh menjalankan action berdasarkan kondisi tertentu
// Kondisi disini bisa kita buat berdasarkan comparison/logical operator

// IF ---> Akan dijalankan ketika condtion bernilai true
// Syntax :
//      if(condition true){
//          action
//      }
let nilaiStudent = 90;
if (nilaiStudent > 70) {
  // true
  console.log('Lulus');
}

let nilaiSiswa = 69;
if (nilaiSiswa >= 70) {
  // false
  console.log('Tidak Remedial');
}

let caption = 'Belajar Pemrograman';
if (caption.length > 5) {
  // true
  console.log('Caption Terlalu Panjang');
}

// IF - ELSE
// Syntax :
//  if(condition true){
//      action
//  }else{
//      action default
//}

let nilaiModul1 = 69;
// if(nilaiModul1 > 69){ // false
//     console.log('Lulus')
// }else{
//     console.log('Remedial')
// }

// IF - ELSE IF - ELSE
let tinggiBadan = 170;
// if(tinggiBadan > 140){ // true
//     console.log('Pendek Sekali') // action
// }else if(tinggiBadan > 150){
//     console.log('Pendek') // action
// }else{
//     console.log('Tinggi Aja') // action default
// }

let point = 70;
// if(point < 70){ // false
//     console.log('Point Rendah')
// }else if(point > 50 || point < 60){ // true || false ---> true
//     console.log('Point Sangat Rendah')
// }else if(point > 30 || point < 40){
//     console.log('Point Rendah Sekali')
// }else{
//     console.log('Point Tidak Terdefinisi')
// }

let nilaiProjectAkhir = 80;
if (nilaiProjectAkhir <= 80) {
  // true
  console.log('Kamu Lulus');
}
if (nilaiProjectAkhir < 90) {
  // true
  console.log('Kamu Lulus Sangat Baik');
}
if (nilaiProjectAkhir < 100) {
  // true
  console.log('Kamu Lulus Dengan Sangat Baik');
}

// NESTED CONDTION ---> If didalam If
let number = 10;
if (number > 0) {
  // true ---> Action
  if (number > 10) {
    // false ---> Action tidak jalan!!!
    console.log('Angkanya Besar');
  } else {
    // Action jalan
    console.log('Angkanya Kecil');
  }
} else {
  // Action tidak jalan!!!
  console.log('Angka Tidak Terdefinisi');
}

// SWITCH CASE
let pekerjaan = 'Programmer';
switch (pekerjaan) {
  case 'Programmer':
    console.log('Profesinya Adalah Programmer');
    break; // Untuk menghentikan suatu program. ; ---> Semicolon
  case 'Manager':
    console.log('Profesinya Adalah Manager');
    break;
  default:
    console.log('Profesi Tidak Terdefinisi');
}

let berat = 90;
switch (berat) {
  case 90:
    console.log('Berat Sekali');
    break; // Untuk menghentikan suatu program. ; ---> Semicolon
  case 80:
    console.log('Berat Aja');
    break;
  default:
    console.log('Berat Biasa');
}
