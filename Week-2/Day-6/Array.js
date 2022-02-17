let data = ['Kevin', 'Haekal', ['Safira', 'Aisyah'], 'Kiki', 'Ryan'];
console.log(data[2]); // ['Safira', 'Aisyah']
console.log(data[2][0]); // 'Safira'

let arrAcak = [true, 10, 'Hello', ['Purwadhika', [10, 'Javascript']], 100, undefined];
console.log(arrAcak[3]); // ['Purwadhika', [10, 'Javascript']]
console.log(arrAcak[3][1]); // [10, 'Javascript']
console.log(arrAcak[3][1][1]); // 'Javascript'

// LOOPING STRING
let nama = 'Rian';
for (let i = 0; i < nama.length; i++) {
  console.log(nama[i]);
}
// nama.length ---> 4
// i = 0, 0<4? ---> 'R' ---> i++
// i = 1, 1<4? ---> 'i' ---> i++
// ...
// i = 3, 3<4? ---> 'n' ---> i++
// i = 4, 4<4? FALSE!!!

let student = 'Haekal! Kevin#';
for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}

let students = ['Aisyah', 'Kevin', 'Safira', 'Kiki'];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
