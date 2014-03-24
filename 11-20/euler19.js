//PatrickGVice
//Project Euler: Question 19
//
//How many Sundays fell on the first of the month during the
//twentieth century (1 Jan 1901 to 31 Dec 2000)?
//The answer is: 171

var sundays = function (){
   var d = new Date();
   var sum = 0;

   for(var i=1901; i <= 2000; i++) {
      for (var j=0; j <= 11; j++) {
           d.setFullYear(i,j,1);
           if ( d.getDay() == 0 ) {
              sum++;
           }
      }
   }
   return sum;
};

var answer = sundays();

console.log("The answer is: " + answer);
