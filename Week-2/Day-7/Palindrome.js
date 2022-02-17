// PALINDROME
// Ex. Katak ---> kataK ---> True
//     Malam ---> malaM ---> True

function Palindrome(kata) {
  let output;

  // Step1. Membalik katanya terlebih dahulu
  let kataToSplit = kata.split('');

  kataToSplit.reverse(); // Method punya array

  kataToSplit = kataToSplit.join('');

  // Step2. Kata yang dibalik sama dengan kata aslinya? Jika iya, true. Jika tidak, false
  // Malam ---> malaM
  if (kata.toLowerCase() === kataToSplit.toLowerCase()) {
    // malam === malam
    output = true;
  } else {
    output = false;
  }

  return output;
}

console.log(Palindrome('Bantal'));
