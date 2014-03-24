//PatrickGVice
//Project Euler: Question 7
//
//What is the 10 001st prime number?
//The answer is: 104743

function primeList (n){//n is the number of primes in the list
  var prime = [];
  var isPrime;
  var j;

  prime.push(2);

  for (var i = 3; prime.length < n; i+= 2){
    j = 0;
    isPrime = true;
    while (prime[j]*prime[j] <= i){
      if (i % prime[j] === 0){
          isPrime = false;
          break;
      }
      j++;
    }
    if (isPrime){
      prime.push(i);
    }
  }
  return prime;

};

var returnPrime = function (){
  var result = primeList(10001);
  return result[result.length-1];
};

var answer = returnPrime();

console.log("The answer is "+answer);
