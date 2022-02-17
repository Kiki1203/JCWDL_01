function cockroachSpeed(s) {
  let hasil = (s / 3600) * 100000;
  return Math.floor(hasil);
}

console.log(cockroachSpeed(1.08));
