let number = '100';
number = number * 2;
number++; // += 1
number--; // -= 1
number++; // += 1
number += '3';
console.log(number);

let point = '3';
point = point + '3'; // Digabungkan '33'
point++; // 34
point += '3'; // Digabungkan '343'
console.log(point);

let angka = 10;
angka += '1'; // Digabungkan '101'
angka--; // Number(100)
angka += '0'; // Digabungkan '1000'
console.log(angka);

let angka1 = 10;
angka1 = angka1 + '1';
angka1++;
angka1 = 0;
console.log(angka1);
