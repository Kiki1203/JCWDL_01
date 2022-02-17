// REVERSE WORD
// Ex. Nama Saya ---> amaN ayaS

// Step2. Ambil setiap katanya, lalu kita balik

function ReverseWord(text) {
  let output = '';

  // Step1. Pisahkan setiap katanya menggunakan split ---> ['Nama', 'Saya']
  let textToArr = text.split(' ');
  console.log(textToArr);

  // Step2. Ambil setiap katanya, lalu kita balik
  for (let i = 0; i < textToArr.length; i++) {
    // Step2.1. Setiap kata yg diambil, kita simpan kedalam array lalu kita reverse
    let newText = textToArr[i]; // Loop1: 'Nama'

    // Step2.2. Kita split berdasarkan '' ---> ['N', 'a', 'm', 'a']
    newText = newText.split('');

    // Step2.3. Reverse
    newText = newText.reverse().join('');
    console.log(newText);

    // Step2.4. Hasil diatas, kita masukan kedalam output
    output += newText + ' ';
  }

  return output;
}

console.log(ReverseWord('Nama Saya'));
