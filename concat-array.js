/* these are the arrays 
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	expected output[ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	expected output [ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);	expected output [ 9, 7, 2 ]
concat([ 5, 10 ], []);	expected output [ 5, 10 ] */
/* just stop making it so complicated back to basics */

function concat (array1, array2) {
  let result = array1.concat(array2);
  return result;
}


// Expected output: Array [1,2,3,4,5,6}
/*Test arrays console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]); reg array to concat
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]); reg array to concat 
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]); this is a sparse array
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]); this is a sparse array 
*/