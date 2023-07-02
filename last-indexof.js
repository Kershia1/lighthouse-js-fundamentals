/* In this challenge, we will be building a function that determines the last index of an item in an array. //Define a function lastIndexOf.
//When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1. */

/* this 3ed try f*** the whole loop up

function lastIndexOf(collection, target) { // created function lastIndexOf to loop through collection array and target values through
  for (var val = 0; val < collection.length; val++) { 
    let lastIndex = -1;
    if (collection[val] === target) { 
      lastIndex = val; // values to be returned along array index, need to also return last element, with an additional variable -1 removed return val just need last element?
    }
  }
  return lastIndex;// if the targets are no longer or never occured should just return -1// no need to brute force -1 just return last val , but will this wonk everything else?
}
// problem not returnign last index when a multiple

// ok need to account for the last element of the index which I thought I had. 

// need to actully continusously update lastIndexOf, to return the final value? note didn't work make a new variable 







console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
Warning */

/*function lastIndexOf(collection, target) { // created function lastIndexOf to loop array and vaues through
  for (var val = 0; val < collection.length; val++) { // working through array with args
    if (collection[val] === target) { // testing array and reaching the end
      return val; // values to be returned along array index
    }
  }
  return -1;// if the value no longer or never occured should just return -1
}
// problem not returnign last index when a multiple */

/* try passed needed to alter my for statment working from beginning to end of the area, and return the final vale with the lastIndex of variable, also needed to decrement with index not value */
function lastIndexOf(collection, target) {
  var lastIndex = -1;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === target) {
      lastIndex = i;
    }
  }
  return lastIndex;
}