// UPPER CASE WAVE
// Ex. Ryan ---> Ryan
//          ---> rYan
//          ---> ryAn
//          ---> ryaN

function UpperCaseWave(text) {
  let textToSplit = text.toLowerCase().split('');
  console.log(textToSplit);

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      var output = '';
      if (i === j) {
        output += textToSplit[j].toUpperCase(); // R
      } else {
        output += textToSplit[j];
      }
    }
    console.log(output);
  }
}

// i=0 ---> j=0, 0<4? true ---> 0 === 0? output += R
//     ---> j=1, 1<4? true ---> 0 === 1? output += y
//     ---> j=2, 2<4? true ---> 0 === 2? output += a
//     ---> j=3, 3<4? true ---> 0 === 3? output += n
//     ---> j=4, SELESAI
// i=1 ---> j=0, 0<4? true ---> 1 === 0? output += r
//          j=1, 1<4? true ---> 1 === 1? output += Y

UpperCaseWave('Ryan');
