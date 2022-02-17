let arr = ['1', '3', '1'];
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i]);
}
// i=0, true, arr[0] = Number(arr[0]) // arr = [1, '3', '1']
// i=1, true, arr[1] = Number(arr[1]) // arr = [1, 3, '1']
// ...

console.log(arr);
