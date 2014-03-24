//PatrickGVice
//Project Euler: Question 9
//
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc?
//The answer is: 31875000

var triplet = function (){
  var result;
  var sum = 1000;
  var a,b,c;

  for (a = 1; a<= sum/3; a++){
    for (b = a + 1; b <= sum/2; b++){
      c = sum - a - b;
      if(c > 0 && ((a*a)+(b*b) === c*c))
        result = a*b*c;
    }
  }
  return result;
};

var answer = triplet();

console.log("The answer is "+answer);
