function digitize(n) {
  let arrayOfDigits = Array.from(String(n), Number);

  return arrayOfDigits;
}

console.log(digitize(191827));
