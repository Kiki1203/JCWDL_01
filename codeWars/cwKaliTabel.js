multiplicationTable = function (size) {
  var table = [];
  for (var i = 1; i <= size; i++) {
    var inner = [i];
    for (var j = 2; j <= size; j++) {
      inner.push(j * i);
    }
    table.push(inner);
  }
  return table;
};

console.log(multiplicationTable(3));
