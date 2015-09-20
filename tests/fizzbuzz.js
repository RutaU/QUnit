var fizzbuzz = function () {
  var string = "";
  for (var i = 0; i < 100; i++) {
    string = i + " :";
    if (i % 3 === 0) {
      string += "fizz";
    }
    if (i % 5 === 0) {
      string += "buzz";
    }
    console.log(string);
  }
}