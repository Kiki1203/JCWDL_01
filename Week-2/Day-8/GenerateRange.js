// GENERATE RANGE
// (startNumber, MaximumNumber, StepUp)
// (3, 10, 2) ---> [3, 5, 7, 9]
// (2, 15, 5) ---> [2, 7, 12]

function GenerateRange(start, max, step) {
  let output = [];

  for (let i = start; i <= max; i += step) {
    // i=3; i<=10; i+=2
    output.push(i);
  }

  return output;
}

console.log(GenerateRange(3, 10, 2));
