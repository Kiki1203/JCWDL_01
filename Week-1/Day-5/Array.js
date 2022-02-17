// ARRAY
// - Dapat meyimpan data lebih dari 1
// -Masing-masing element-element didalam array memiliki index penomoran
// (Index Penomoran dimulai dari 0)
// - Array itu sendiri dapat menyimpan berbagai macam tipe data, termasuk tipe data array sendiri

// Case. Apps Market
let product1 = 'Apel';
let product2 = 'Jeruk';
let product3 = 'Anggur';
let product4 = 'Semangka';
let product5 = 'Mangga';
// ...
let product10 = 'Pear';

// Syntax Array :
// let dataArray = [data1, data2, data3,......]

let product = ['apel', 'jeruk', 'anggur', 'semangka', 'mangga', 'pear'];
console.log(product[0]);
console.log(product[5]);
console.log(product.length);

let banyakData = [10, 'Purwadhika', true, ['Haekal', 'Asyah', 'Rian']];

// CRUD (Create, Read, Update, Delete)
let data1 = 'Semangka';
console.log(data1);
data1 = 'Jeruk';
data1 = '';

// Create
let buah = ['Apel', 'Jeruk', 'Mangga']; // [ 'Apel', 'Semangka', 'Mangga', 'Pear' ]

// Read
console.log(buah[0]);
console.log(buah[2]);

// Update
buah[1] = 'Semangka';
console.log(buah);

buah[3] = 'Pear';
console.log(buah);

buah[7] = 'Durian';
console.log(buah);
console.log(buah[4]);

// Delete
let locker = ['Buku', 'Pulpen', 'Laptop'];
delete locker[0];
locker[0] = 'Bantal';
console.log(locker);

const dataArr = [1, 2, 3];
dataArr[3] = 4;
dataArr[0] = 11;
console.log(dataArr);
