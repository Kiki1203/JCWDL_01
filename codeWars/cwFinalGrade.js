function finalGrade(exam, projects) {
  if (exam >= 90 || projects >= 10) {
    return 100;
  } else if ((exam >= 75 && exam < 90) || (projects >= 5 && projects < 10)) {
    return 90;
  } else if ((exam > 50 && exam < 75) || (projects > 2 && projects < 5)) {
    return 75;
  } else if (exam < 50 || projects < 2) {
    return 0;
  }
}

console.log(finalGrade(49, 10));
console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
