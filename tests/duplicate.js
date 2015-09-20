var duplicate = function (array) {
  var arr1 = array.length;
  var arr2 = [];
  for (var i = 0; i < arr1; i++) {
    arr2[i] = array[i];
  };
  console.log(arr2);
  var arr3 = arr2.concat(array);
  return arr3;
};