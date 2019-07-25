/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  for (var i = 0; i < n; i++){
    solution.push([].fill(0, 0, n))
  }
  console.log(solution)
  for (var row = 0; row < n; row++){
    for (var col =0; col < n; col++){

    }
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var inner = function (n){
    if (n === 1) {
      return 1;
    }
    return  n * inner(n-1);
  }
  var solutionCount = inner(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount; //fixme
  if (n === 0 || n === 1) {
    solutionCount = 1;
  } else if (n === 3 || n === 2) {
    solutionCount = 0;
  } else if (n % 2 === 0) {
    solutionCount = n - 2;
  } else {
    solutionCount = 2 * n;
  }
  console.log(solutionCount)

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
