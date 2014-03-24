//PatrickGVice
//Project Euler: Question 12
//
//What is the value of the first triangle number to have over five hundred divisors?
//The answer is: 76576500

var numberOfDivisors = function (num){
  var nod = 0;
  var sqrt = Math.sqrt(num);
  for (var i = 1; i <= sqrt; i++){
    if (num % i == 0){
      nod += 2;
    }
  }
  if (sqrt * sqrt == num){
    nod--;
  }
  return nod;
};

var triangleNum = function (){
  var number = 0;
  var i = 1;

  while (numberOfDivisors(number) < 500){
    number += i;
    i++;
  }
  return number;
};

var answer = triangleNum();

console.log ("The answer is :"+answer);
