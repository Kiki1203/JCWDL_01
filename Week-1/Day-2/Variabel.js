// variable --> tempat untuk menyimpan data
//          --> hanya dapat menyimpan 1 data
// case client menyuruh kita membuat program untuk menanmpilkan hello word! 3 kali di terminal

console.log('hello word !');
console.log('hello word !');
console.log('hello word !');

// 1. cara membuat variable / declare variable var nama_variable

var kata;

// 2. cara meng-assign variable

kata = 'hello word';

console.log(kata);
console.log(kata);
console.log(kata);

// var nama = haekal; membuat variabel sekaligus assign value kedalam variable (declare)

var namasiswa = 'safira';
var namasiswa = 'kiki';
console.log(namasiswa);

var namakota = 'jakarta';
namakota = 'bogor';
console.log(namakota);

// declare multiple variable ; var nama_variabel2, nama_variable2
var namaSaya, usiaSaya, hobiSaya;
namaSaya = 'kiki';
usiaSaya = '26';
hobiSaya = 'basket';

console.log(namaSaya);
console.log(hobiSaya);
console.log(usiaSaya);

// aturan penamaan Variable
// 1.Berilah varible dengan nama yang jelas (tidak general)
var dataNama = 'pattimura';
var namaStudent = 'patimura';

// 2. Tidak boleh memberikan nama variable dengan syntax bawaan dari javascript
// va var
// var console.log

// 3. Penamaan variable hanya boleh di awali dengan huru, _, $ (tidak boleh diawali dengan angka dan special character lainnya)
// var 1nama
// var #nama
var namaKu;
var $namaKu;
var _namaKU;
var Student1purwadhika;

// 4. Penamaan variable tidak boleh menggunakan spasi (sambungkan dengan _ atau gunkana "camelCase")
var student_purwadhika;
var studentPurwadhika;

//  "javascript Case sensitive" mendeclare harus sama huruf nya upper/lower case
var namaBuah = 'Semangka';
var namaBuah = 'apel';
console.log(namaBuah);

// Modern Syntax Declaration ---> Declare variable dengan siyntax terbaru: let & const (ES6)
// let : let nama_variable
let nama_Saya = 'kiki';
let asal_Saya = 'Sukabumi';
let usia_Saya = 26;

// conts -> Constant -> Variable yang dideclare menggunakan const, valuenya tidak dapat di ubah
const color = 'biru';
// color = 'merah'
// console.log(color);

// Perbedaan antara var x let
// var : bisa membuat variable dengan nama yang sama lebih dari 1
var game1 = 'PES 2021';
var game2 = 'FIFA 2021';
// ...
// ...
// ...
// ...
// ...
// console.log(game)

// let & const : Tidak bisa membuat variable dengan nama yang sama lebih dari 1
let laptop = 'Asus';
let laptop1 = 'Lenovo';
// ...
// ...
// ...
// ...
// ...
console.log(laptop);

// Perbedaan var, let x const
// var, let : Valuenya dapat di ubah
// const    : Valuenya tidak dapat di ubah

var siswa1 = 'Haekal';
var siswa2 = 'Safira';
// ...
// ...
// ...
var siswa30 = 'Kiki';
var siswa30 = 'Kevin';

console.log(siswa30);

let student1 = 'Defryan';
let student2 = 'Tridya';
// ...
let student30 = 'Isfandy';
let student31 = 'Ryan';
console.log(student30)