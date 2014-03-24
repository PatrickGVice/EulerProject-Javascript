//PatrickGVice
//Project Euler: Question 10
//
//Find the sum of all the primes below two million
//The answer is: 142913828922

function primeList (n){//n for the max prime in the list
  var prime = [];
  var isPrime;
  var j;

  prime.push(2);

  for (var i = 3; prime[prime.length-1] < n; i+= 2){
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

var findSum = function (){
  var result = 0;
  var primeArr = primeList(2000000);
  console.log (primeArr[primeArr.length-2]);
  //Don't want to use the last number in the array,
  //because is will be other 2 million
  for (var i = 0; i<primeArr.length-1; i++){
    result+=primeArr[i];
  }
  return result;
};

var answer = findSum();

console.log ("The answer is: "+answer);
