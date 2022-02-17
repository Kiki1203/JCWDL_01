// LOOPING OBJECT
// Creat
// let dataUser1 = [['ryan.fandi@gmail.com', 12341234][('haekal@gmail.com', 'abcdeabcde')]];

// let dataUser2 = [
//   { email: 'ryan.fandy@gmail.com', password: 12341234 },
//   { email: 'haekal@gmail.com', password: 'abcdabcd' },
// ];

// let email = 'kevin@gmail.com';
// let password = 'qwerty';

// dataUser2.push({ email: email, password: password });
// console.log(dataUser2);

// Read
// console.log(dataUser2[1]); //{ email: 'haekal@gmail.com', password: 'abcdabcd' }
// console.log(dataUser2[1].password);

// Update
// dataUser2[1].email = 'haekal@haekal.com';
// console.log(dataUser2);

// Delete
// dataUser2.splice(1, 1);
// console.log(dataUser2);

// for (let i = 0; i < dataUser2.length; i++) {
//   console.log(dataUser2[i]);
// }

// dataUser2.forEach((value) => {
//   console.log(value.email);
// });

let dataUser2 = [
  { email: 'ryan.fandy@gmail.com', password: 12341234 },
  { email: 'haekal@gmail.com', password: 'abcdabcd' },
  // ...
  // ...
  // ...
];

let currentEmail = 'haekal@gmail.com';
let passwordLama = 'abcdabcd';
let newPassword = 123123;
dataUser2.forEach((value, index) => {
  if (currentEmail === value.email) {
    dataUser2[index].password = newPassword;
  }
});

console.log(dataUser2);
