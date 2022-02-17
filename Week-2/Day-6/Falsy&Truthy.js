// FALSY
// 0
// -0
var data1 = 0;
console.log(Boolean(data1));

// ""
var data2 = '';
console.log(Boolean(data2));

// null
// undefined
// NaN

// TRUTHY
// Selain dari falsy values yang ada diatas, dia akan dianggap sebagai truthy values
// 100
console.log(Boolean(100));

// "A"
console.log(Boolean('A'));

// Falsy Values
let string = '';
console.log(Boolean(`${string}`));

// Saya ingin memvalidasi inputan user, agar user tidak memasukan huruf
let number = 1;

if (Boolean(number)) {
  console.log('Inputan Harus Berupa Angka!');
}
