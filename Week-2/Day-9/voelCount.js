// function vowelCount(str) {
//   let arr_vowel_list = 'aeiouAEIOU'.split('');

//   let count = 0;

//   str.split('').forEach(function (e) {
//     if (arr_vowel_list.indexOf(e) !== -1) {
//       count++;
//     }
//   });

//   console.log(count);
// }

// vowelCount('purwadhika');

function getCount(str) {
  let arr_vowel_list = 'aeiouAEIOU'.split('');

  var count = 0;

  str.split('').forEach(function (e) {
    if (arr_vowel_list.indexOf(e) !== -1) {
      count++;
    }
  });
  return count;
}

console.log(getCount('kiki'));
