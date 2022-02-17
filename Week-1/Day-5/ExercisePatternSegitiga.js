// Ex. ***
//     **
//     *

let output = '';
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > i; j--) {
    output += '* ';
  }
  output += '\n';
}
