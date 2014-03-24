//PatrickGVice
//Project Euler: Question 1
//
//Find the sum of all the multiples of 3 or 5 below 1000.
//The answer is: 233168


var multiples = function (num){
    var sum=0;
    for (var i = 1; i < num; i++) {
        if ( (i % 3 == 0) || (i % 5 == 0) ) {
            sum += i;
        }
    }
    return sum;
};

var answer = multiples(1000);

console.log("The answer is: "+answer);
