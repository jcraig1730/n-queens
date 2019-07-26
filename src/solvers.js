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
  var solution = new Board ({ n });
  if (n === 1) {
    solution.togglePiece(0, 0);
    return solution.rows();
  }
  solution.rows().forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        solution.togglePiece(rowIdx, colIdx);
        if (solution.hasAnyRooksConflicts()) {
          solution.togglePiece(rowIdx, colIdx);
        }
      });
  });
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
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

  console.log('current n', n)
  // if (n === 0) {
  //   var solution0 = new Board ({n: 0})
  //   console.log(solution0.rows().length)
  //   // solution0.attributes[0] = 0;
  //   // solution0.attributes
  //   return solution0.attributes;
  // }
  var solution = new Board ({ n });
  if (n === 1) {
    solution.togglePiece(0, 0);
    return solution.rows();
  }
  if (n === 2 || n === 3){
    return solution.rows();
  }
  // var firstRow = solution.rows()[0]
  // var rowNum = 0;
  var pieceCount = 0;
  placeQueen(0, 0);
  function placeQueen(curRow, col){
    if (curRow === n && col === 0) {
      return true;
    }
    for (col; col < n; col ++) {
      solution.togglePiece(curRow, col);
      pieceCount ++;
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(curRow, col);
        pieceCount --;
      }
      if (pieceCount === curRow + 1) {
        if (placeQueen(curRow+1, 0)) {
          console.log('hi');
        } else if (col === n - 1 && pieceCount !== curRow + 1) {
            solution.togglePiece(curRow - 1, solution.rows()[curRow-1].indexOf(1));
            pieceCount --;
          }
        }
      }

      // else {
      //   solution.togglePiece(curRow, col);
      //   pieceCount --;
      // }

      // if (solution.hasAnyQueensConflicts()) {
      //   solution.togglePiece(curRow, col);
      //   pieceCount --;
      //   console.log('inside hasAnyQueenConflicts', solution)
      // }
      // if (pieceCount === n) {
      //   return;
      // }
      // if (pieceCount === curRow + 1) {
      //   console.log('hiii')
      //   return placeQueen(curRow+1, 0);
      // } else {
      //   return placeQueen(curRow, col + 1);
      // }
    }
    // if (solution.rows()[curRow].indexOf(1) === -1|| (curRow === n - 1 && pieceCount !== n)) {
    //   console.log(solution.rows(), 'curRow', curRow, 'pieceCount', pieceCount)
    //   var start = solution.rows()[curRow - 1].indexOf(1)
    //   solution.togglePiece(curRow - 1, start);
    //   pieceCount --;
    //   placeQueen(curRow--, start)
    //   console.log(solution)
    // }
  }

  // function(starting point for col, called)
  // if (!called)
  // for (var row = 0; row < Object.keys(solution.rows()).length; row ++) {
  //   var rowArray = solution.rows()[row];
  //   if (n % 2 === 0 && row === 0){
  //     var col = 1;
  //   } else {
  //     var col = 0
  //   }
  //   for (col; col < rowArray.length; col ++) {
  //     solution.togglePiece(row, col);
  //     if (solution.hasAnyQueensConflicts()) {
  //       solution.togglePiece(row, col);
  //     }
  //   }
  // }
  // console.log(solution)
  // return solution;

  // function inner (colStart, firstRow){
  //   var pieceCount = 0;
  //   for (var row = 0; row < Object.keys(solution.rows()).length; row ++) {
  //     var rowArray = solution.rows()[row];
  //     for (var col = firstRow ? colStart : 0; col < rowArray.length; col ++) {
  //       if (firstRow) {
  //         firstRow = false;
  //       }
  //       solution.togglePiece(row, col);
  //       pieceCount ++;
  //       if (solution.hasAnyQueensConflicts()) {
  //         solution.togglePiece(row, col);
  //         pieceCount --;
  //       }
  //     }
  //     if (pieceCount !== n) {
  //       inner(colStart++, true);
  //     }
  //   }
  //   return solution;
  // }
  // var solutionYes = inner(0, true);
  // solution.rows().forEach((row, rowIdx) => {
  //     row.forEach((col, colIdx) => {
  //       solution.togglePiece(rowIdx, colIdx);
  //       if (solution.hasAnyQueensConflicts()) {
  //         solution.togglePiece(rowIdx, colIdx);
  //       }
  //     });
  // });

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution.rows();
  console.log(solution)
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
