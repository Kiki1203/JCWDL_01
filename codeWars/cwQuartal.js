const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else if (month > 9 && month <= 12) {
    return 4;
  }
};

// const quarterOf = (month) => {
//
//     return Math.ceil(month / 3);
//   }

console.log(quarterOf(3), 1);
console.log(quarterOf(8), 3);
console.log(quarterOf(11), 4);
