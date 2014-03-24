// PatrickVice
// Project Euler: Question 2
//
//By considering the terms in the Fibonacci sequence whose values do not exceed
//four million, find the sum of the even-valued terms?
//The answer is :4613732.

var euler2 = function(n) {
	var total = 0;
	var f1 = 0;
	var f2 = 1;
	var fn;
	for ( var i = 2; i < n; i++ ){
		fn=f1+f2;
		if (fn%2 === 0 && fn < n){
			total += fn;
		}
		f1=f2;
		f2=fn;

	}
	return total;
};

var answer = euler2 (4000000);

console.log ("The answer is :"+answer);
