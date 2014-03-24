//PatrickGVice
//Project Euler: Question 14
//
//Which starting number, under one million, produces the longest chain?
//The answer is: 837799

var sequance = function (num){
  var seqLength = 0;
  var startNum = 0;
  var seq;

  for (var i = 2; i <= num; i++){
    var length = 1;
    seq = i;
    while (seq != 1){
      if ((seq % 2) == 0){
        seq = seq / 2;
      }else{
        seq = seq * 3 + 1;
      }
      length++;
    }

    if (length > seqLength){
      seqLength = length;
      startNum = i;
    }
  }
  return startNum;
};

var answer = sequance(1000000);

console.log("The answer is: "+ answer);
