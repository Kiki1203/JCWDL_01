function shortWord(str) {
  let array = str.split(' ');
  let findShort = array.sort((a, b) => a.length - b.length)[0];
  return findShort.length;
}
console.log(shortWord('Purwadhika tempatnya belajar coding'));
