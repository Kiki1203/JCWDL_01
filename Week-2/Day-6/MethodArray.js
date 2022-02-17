let arr1 = ['Pizza', 'Burger', 'Boba'];
console.log(arr1.slice(0, 1));

let arr2 = ['Thai Tea', 'Ayam Bakar', 'Ketoprak'];
console.log(arr2.splice(0, 1));
console.log(arr2);

// Split ---> Method untuk mengconvert dari string menjadi array
let str1 = 'Purwadhika';
console.log(str1.split(''));

let message = 'Hello, World!';
console.log(message.split(','));
console.log(message.split(' '));

// Join ---> Method untuk mengconver dari array menjadi string
let arr3 = ['Hello', 'Student', 'Purwadhika'];
console.log(arr3.join(''));
console.log(arr3.join(' '));
console.log(arr3.join('/'));
