//PatrickGVice
//Project Euler: Question 6
//
//Find the difference between the sum of the squares of the first one hundred
//natural numbers and the square of the sum.
//The answer is: 25164150.

var sumOfSquares = function (n){
  var result = 0;
  for (var i= 1; i <= n; i++){
    result += (i*i);
  }

  return result;
};

var squaresOfSums = function (n){
  var result = (n*(n+1))/2; //sum of a series equation
  result *= result
  return result;
};

var answer = squaresOfSums(100) - sumOfSquares(100)

console.log("The answer is: "+answer);
