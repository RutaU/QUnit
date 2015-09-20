var evaluateExpression = function (arg1, arg2, arg3) {
  var expression = arg1 + arg3 + "(" + arg2 + ")";
  return eval(expression);
};