QUnit.module("Testing findLongestWord() ");

QUnit.test( "function findLongestWord", function( assert ) {
  assert.strictEqual(findLongestWord(["Appleappleapple", "Banana", "Orange", "Pomegranate", "Peach"]), 15);
  assert.strictEqual(findLongestWord(["TV", "Radio", "Flash", "CD", "Book"]), 5);
  assert.strictEqual(findLongestWord(["Milan", "Besikiškiakopūsteliaudamasis", "Orange"]), 28);
});

QUnit.module("Testing sum_multiply() ");

QUnit.test( "sum function", function( assert ) {
  assert.strictEqual(sum([5,5,2,8,4]), 24);
  assert.strictEqual(sum([-5,5,2,8,-4]), 6);
  assert.strictEqual(sum([1,0,2,4,-14]), -7);
  assert.equal(sum([1,0,2,4,3]), 10);
});

QUnit.test( "multiply function", function( assert ) {
  assert.strictEqual(multiply([5,5,1,2,3]), 150);
  assert.strictEqual(multiply([1,5,2,8,-2]), -160);
  assert.strictEqual(multiply([-5,0,2,8,4]), 0);
});


QUnit.module("Testing evaluateExpression() ");

QUnit.test( "function evaluateExpression", function( assert ) {
  assert.strictEqual(evaluateExpression(5,10,"+"), 15);
  assert.strictEqual(evaluateExpression(20,2,"/"), 10);
  assert.strictEqual(evaluateExpression(-5,-3,"-"), -2);
  assert.strictEqual(evaluateExpression(5,15,"-"), -10);
  assert.strictEqual(evaluateExpression(-5,-10,"*"), 50);
  assert.strictEqual(evaluateExpression(5,5,"%"), 0);
  assert.strictEqual(evaluateExpression(5,5,"/"), 1);
});


QUnit.module("Testing duplicate() ");

QUnit.test( "function duplicate()", function( assert ) {
  assert.deepEqual(duplicate([9,2,3,4,5]), [9,2,3,4,5,9,2,3,4,5]);
  assert.deepEqual(duplicate([1, -2, 0, 5]), [1, -2, 0, 5, 1, -2, 0, 5]);
  assert.deepEqual(duplicate(['ok', 3, 0, 44]), ['ok', 3, 0, 44, 'ok', 3, 0, 44]);
  
});

// QUnit.module("Testing fizzbuzz() ");
// Ar galima pratestuoti fizzbuzz? Nesugalvoju kaip. Šiai funkcijai nieko nepaduodam...

