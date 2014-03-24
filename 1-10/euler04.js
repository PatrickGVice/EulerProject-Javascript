//PatrickGVice
//Project Euler: Question 4
//
//Find the largest palindrome made from the product of two 3-digit numbers.
//The answer is: 906609.

var largestPalin = function(){
  var arr = [];

  var isPalin = function (i){
    return i.toString() == i.toString().split("").reverse().join("");
  }

  for(var i =999; i>100; i--){
      for(var j = 999; j>100; j--){
          var mul = j*i;
          if(isPalin(mul)){
              arr.push(j * i);
          }
      }
  }

  return Math.max.apply(Math, arr);
};

var answer = largestPalin();

console.log ("The answer is: "+answer);
