//  SCOPE VARIABLE JAVASCRIPT
//   -Global Scope
//   -Local Scope

// Global Scope ----> Dapat diakses dimana saja (termasuk local scope)
var nama = 'kiki';
console.log(nama);

let kampus = 'Purwadhika';
console.log(kampus);

// Local Scope ----> {...} / {...}

//  ----> hanya bisa diakses di dalam scope tersebut / di

{
  let student = 'haekal';
}

// console.log(student);

// var x let & const
// var : Tidak mengenal yang namanya scope
var namaStudent = 'Safira';
{
  console.log(namaStudent);
}

// let & const : - Mengenal global maupun local scope
//               - Ketika di declare di dalam local scope, maka dia hanya dapat diakses didalam scope itu
//                  atau didalam scope berikutnya

let namaSiswa = 'kevin';
{
  console.log(namaSiswa);
}
{
  let studentPwd = 'Aisyah';
}
// console.log(studentPwd);

{
  let siswaPwd = 'Rian';
  {
    console.log(siswaPwd);
  }
}

// Ex.

var food = 'Seblak';
{
  var food = 'Pizza';
  {
    var food = 'Gorengan';
  }
}

console.log(food);

let Laptop = 'Asus';
{
  let Laptop = 'Lenovo';
}
console.log(Laptop);

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}

const number = 10;
{
  console.log(number);
  {
    console.log(number);
  }
}

console.log(number);
