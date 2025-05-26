/**
 Alter concate array 
 to merge per-sorted nested arrays provided by researchs

 return a shallow copy, ingore sparse sections, return on 1st level


 original logic to be changed: 

 function concat (array1, array2) {
  let result = array1.concat(array2);
  return result;
}

Desired output:
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]); =>	sortedMerge[ 1, 2, 3, 4, 4, 5, 6 ]

 */

function concat (array1, array2) {
  let result = array1.concat(array2);
  return result;
}


//provided logs for testing
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);