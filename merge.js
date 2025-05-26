/**
 Alter concate array 
 to merge per-sorted nested arrays provided by researchs

 return a shallow copy, ingore sparse sections, return on 1st level


 original logic to be changed: 

 function concat (arr1, arr2, array2) {
  let result = arr1, arr2.concat(array2);
  return result;
}

using inifintiy, so I dont have to specify depth to flatten to in the array

Desired output:
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]); =>	sortedMerge[ 1, 2, 3, 4, 4, 5, 6 ]

 */
function merge (arr1, arr2) {
  let results = [...arr1, ...arr2]//destructure
  .flat(Infinity)
  .filter(el => typeof el === 'number' && !isNaN(el))// if the element from the flattened array is not a number do not return
  .sort((a,b) => (a - b));

  return results;
}

//notes misunderstood key logic of nested arrays. even though provided in a single array, the nested arrays need to be opened and merged togther, ny destructuring and THEN flattening. otherwise all efforts to filter and sort will only work and be returned in each seperate array. 


//provided logs for testing
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);