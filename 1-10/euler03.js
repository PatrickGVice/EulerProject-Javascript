//PatrickGVice
//Project Euler: Question 3
//
//What is the largest prime factor of the number 600851475143 ?
//The answer is: 6857.

var maxPrime = function(n){
	var a = n;
	var b = 2;
	var c;

	while (a > b){

		if (a%b === 0){
			a = a/b;
			b = 2;
		}
		b++;
	}
	return b;
};

var answer = maxPrime(600851475143);


console.log ("The answer is: "+answer);
