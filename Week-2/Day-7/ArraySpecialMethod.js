// ARRAY SPECIAL METHOD
// .forEach
// Indirect Callback

let students = ['Kevin', 'kiki', 'Safira'];
let cb = (value) => {
  console.log(value);
};

students.forEach(cb);

// Direct Callback
students.forEach((value, index) => {
  console.log(`index ke -${index} = ${value}`);
});

// .map
// - Cb function selalu mereturn suatu nilai, dimana nilai yang di return akan dimasukan kedalam array baru
//   yang di buat secara internal oleh .map tanpa kita harus membuatnya
// - Kerena menghasilkan array bentuk baru, maka kita sering gunakan untukmemodifikasi data
let day = ['senin', 'selasa', 'rabu'];

let result = day.map((value) => {
  //['senin', 'selasa', 'rabu'];
  return value;
});

console.log(result);

//Semisal menggunakan forEach
let newDays = [];
