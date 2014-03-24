//PatrickGVice
//Project Euler: Question 20
//
//Find the sum of the digits in the number 100!
//The answer is:

var number = [1],
    sum = 0,
    multi = 1;

for(var i = 0; i < 100; i++){
    var overflow = 0,
        count = number.length + 1
        multi++;
    for(var j = 0; j < count; j++){
        var digit = number[j] || 0;
        digit = multi * digit + overflow;
        if(digit > 9){
            digit -= 10;
            overflow = 1;
        }else{
            overflow = 0;
        }
        number[j] = digit;
    }
}

for(var i = 0; i < number.length; i++){
    sum += number[i];
}

console.log(number.length);
