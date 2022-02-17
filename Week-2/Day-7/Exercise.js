// UPPER CASE WAVE
// Ex. Ryan ---> Ryan
//          ---> rYan
//          ---> ryAn
//          ---> ryaN

let wave = (str = '') => {
  return str.split('').map((kata, i, arr) => `${arr.slice(0, i)}${kata.toUpperCase()}${arr.slice(i + 1, arr.length)}`.replace(/,/g, ''));
};

console.log(wave('ryan'));

// GENERATE RANGE
// Ex. (AngkaPertama, MaxRange, Range) ---> (2, 10, 2) ---> [2, 4, 6, 8, 10]
//                                          (3, 5, 1) ---> [3, 4, 5]

function GAngka(...data) {
  let array = data;

  return data;
}

console.log(GAngka(1, 2, 3));
