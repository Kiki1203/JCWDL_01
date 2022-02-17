// BREAK & CONTINUE

// BREAK ---> Untuk menghentikan sebuah program
// Ex. Ingin mendapatkan huruf a paling awal dari sebuah kalimat

let kalimat = 'Hai, Dunia!';
// console.log(kalimat[0])
// console.log(kalimat[4])

for (let i = 0; i < kalimat.length; i++) {
  // console.log('Test')
  if (kalimat[i] === 'a') {
    // console.log(kalimat[i])
    break;
  }
}
// i=0, 0<11? true, kalimat[0] === 'a'? false! ---> i = 1
// i=1, 1<11? true, kalimat[1] === 'a'? true!

// Ex. Ingin mendapatkan bilangan genap paling awal dari sederet angka random
let angkaRandom = '19256783938845';

for (let a = 0; a < angkaRandom.length; a++) {
  // console.log(angkaRandom[a])
  if (angkaRandom[a] % 2 == 0) {
    // console.log(`${angkaRandom[a]} Adalah Angka Genap`)
    break;
  }
}

// let angka1 = 6813759490
// console.log(angka1.toString()[1])
// console.log(angka1)

// let angka2 =  6813759490
// angka2 = angka2.toString()
// console.log(angka2)

// a = 0, 0 < 14? true, angkaRandom[0] = 1, false, a -> 1
// a = 1, 1 < 14? true, angkaRandom[1] = 9, false, a -> 2
// a = 2, 2 < 14? true, angkaRandom[2] = 2, true menjalankan action

// CONTINUE ---> Untuk melewati action yang ada dibawahnya / Untuk skip looping
// Ex. Buatlah looping untuk menampilkan bilangan yang bernilai genap!

for (let i = 0; i < 10; i++) {
  if (i % 2 === 1) {
    continue;
    // ...
    // ...
    // ...
  }
  // console.log(i)
  // ...
}
// i = 0, 0 < 10? true, false -> console log 0, i = 1
// i = 1, 1 < 10? true, true -> continue, i = 2
// i = 2, 2 < 10? true, false -> console.log 2, i = 3

let angka = 1;
while (angka <= 10) {
  if (angka % 2 === 1) {
    angka++;
    continue;
  }

  console.log(angka);
  angka++;
}

let number = 1;
do {
  if (number % 2 === 1) {
    number++;
    continue;
  }

  console.log(number);
  number++;
} while (number <= 10);
// angka = 1, 1 <= 10? true, true ---> increment sekaligus continue, angka = 2
// angka = 2, 2 <= 10? true, false ---> console.log 2 sekaligus increment, angka = 3
// ...
