// METHOD ARRAY
// Push ---> Menambah data baru setelah index terakhir
let students = ['Haekal', 'Kevin', 'Rian', 'Kiki', 'Safira', 'Defry', 'Aisyah'];
students.push('Asisyah');
students.push('Defryan');
console.log(students);

// Unshift ---> Menambah data baru sebelum index paling awal
// students.unshift('Budi')
// students.unshift('Arif')
console.log(students);

let newArr = [];
for (let i = 0; i < students.length; i++) {
  if (i === 1) {
    newArr.push('Ryan Defryan');
    newArr.push(students[i]);
  } else {
    newArr.push(students[i]);
  }
}

console.log(newArr);

// Pop ---> Menghapus data di index paling terakhir
// students.pop()
// console.log(students)

// Shift ---> Mengjapus data di index paling awal
students.shift();
students.shift();
console.log(students);

// Splice ---> Tambah Data, Update Data, Menghapus Data
// Syntax :
//      arr.splice(startIndex, totalDataToDelete, newData)
//      - Start Index : Ingin melakukan sesuatu dimulai dari index ke-...
//      - totalDataToDelete : Jumlah data yang ingin dihapus
//      - NewData : Data bakalan ditambahkan sesuai dengan start index
// let arrBulan = ['Jan', 'Feb', 'Mar']
// arrBulan.splice(1, 0, 'Jan to Feb')
// console.log(arrBulan)

// arrBulan.splice(2, 0, 'Data Baru Nih!')
// console.log(arrBulan)

// arrBulan.splice(1, 2) // Menghapus sebanyak 2 data, dimulai dari index ke-1
// console.log(arrBulan)

// arrBulan.splice(1, 0)
// console.log(arrBulan)

// arrBulan.splice(1, 2, 'Senin', 'Selasa') // Menghapus 2 data, dimulai dari index ke-1 serta menambahkan Senin & Selasa
// console.log(arrBulan)

// Slice
// Mengambil data dari index ke-awal sampai index ke-akhir (index ke-akhir tidak ikut)

let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis'];
console.log(hari.slice(0, 1));
console.log(hari.slice(1, 3));

// Includes & Index Of
// Includes : Untuk mencari tahu, apakah data yang kita cari ada didalam array?
// Index Of : Mencari data kita ada di index ke berapa?
let locker1 = ['Laptop', 'Jam Tangan', 'Kamera', 'HP', 'Remote'];
console.log(locker1.includes('Jam Tangan'));
console.log(locker1.indexOf('Jam Tangan'));

// Sort
let angkaAcak = [5, 6, 10, 11, 3, 15, 20, 100];
console.log(angkaAcak.sort((a, b) => a - b));
console.log(angkaAcak.sort((a, b) => b - a));
