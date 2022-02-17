function findUniq(arr) {
  return (
    arr.filter(function (value) {
      return arr.indexOf(value) === arr.lastIndexOf(value);
    })[0] || -1
  );
}

// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }
console.log(findUniq([1, 0, 0]));
