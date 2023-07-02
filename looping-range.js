// Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a given start, end, and step parameter.

// The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.

// At some point in your code, you may want to use some_array.push(some_value)
//You may paste the following code after your function definition to help you verify it works correctly:
//console.log(range(0, 10, 2));
//console.log(range(10, 30, 5));
//console.log(range(-5, 2, 3));

// Try 5 spaces now linted, running not crashing, but empty when neg, not sure how to address yet. empty when end >start try >= ? ( try 4b worked now at 2 passes instead of 1) edit try 4c removed = in operators in if statement (back to 1 pass, replace)

/*function range(start,end,step){
  let output = [];
  if( start >= 0 && end <= 100 && step > 1) {
    console.log(output);
    for (let i = start; i <= end; i += step) {
      output.push(i); 
    }
    return output;
  } // note to selfnot passing the other req's beauce I have not included the additional conditions....
  console.log(range(-5, 2, 3));
} */

//function range(start,end,step){ my original idea
  //let output =[];
  //if output( start >= 0 && end <= 100 && step > 0) {
  //console.log(output);}
  //for (let i = 0; i< output.length; i++) {
    //console.log(output[i]); 
  //} this would only return a blacnk console though. 
// I need to actully tie my for loop to the originally stated parameters of start, end, step. Not create a new array based on the arrays length. So I also need to use the push hint to add to the end of the array? 

  function range(start,end,step){
  let output = [];
  for( start >= 0 && end <= 100 && step > 0 ) {
    for (let i = start; i <= end; i += step) {
    return output.push(i);
  } if( start > end || step != 0 ){
    return output;
  } else if ( step < 0) {
    return output;
  }
  }
    // note to selfnot passing the other req's beauce I have not included the additional conditions....
  console.log(range(-5, 2, 3));
}
console.log(range(0, 10, 2));
// maybe try indexwith()?

// try 4 
function range(start, end, step) {
  let output = [];
  if (start >= 0 && end <= 100 && step !== 0) {
    for (let i = start; i <= end; i += step) {
      output.push(i); // extra if else fluff removed
    }
  }
  console.log(output);
  return output;
}

console.log(range(-9,3,3));

// note to self still failing -9 to 3 by 3, how ?!?
// try step at 0?