//PatrickGVice
//Project Euler: Question 15
//
//How many such routes are there through a 20×20 grid?
//The answer is: 137846528820

//This is using Binomial coefficient
var routes = function (gridSize){
  var paths = 1;

  for (var i = 0; i < gridSize; i++){
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }
  return paths;
};


var answer = routes(20);

console.log ("The answer is: "+answer);
