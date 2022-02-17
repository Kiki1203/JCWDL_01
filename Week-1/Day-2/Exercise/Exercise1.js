// Membuat rumus
//  jika
let x = 4;
let y = 3;
let z = 2;

//  w = ((x + y x z) / (x x y))pangkat z

let w = x + (y * z) / (x * y);
let hasil = Math.pow(w, z);

console.log(hasil);
