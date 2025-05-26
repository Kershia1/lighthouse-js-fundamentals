/*
count types of trash placed in trash cans for a waste management company

params: trash, bins

types(keys): waste, recycling, compost

(values) increment value by 1 per unit of trash type 

example function to create: 

smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

Desired output: 
{
  waste: 4,
  recycling: 3,
  compost: 5
}

*/





/*

/* 1) what we're calling smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
// what we want returned 
2) {
  waste: 4,
  recycling: 3,
  compost: 5
}
3) arguments for the for ... each statement
Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.
// for each functions are not chainable, but the callbackfn can be alterd , only really to work with the this value alkong the length of the array it is called upon, and the interger properties 

const smartGarbage = function (trash, bins) {
  if(trash = waste: 4, recycling: 2,compost: 5);
  return sortTrash;
}
  sortTrash.foreach  { // incremet along lenght of array to return amount of bins.
    let bins = 
    if (sortTrash.waste >= 0)
    return waste;
  } else if { (sort.recycling >= 0)
    return recycling;
  } else if { (sort.compost >= 0)
    return compost; 
  }else{ 
    return undefined;
  }
console.log(smartGarbage.sortTrash);
// try 4 
const smartGarbage = function (trash, bins) {
  // Increment the correct value in the bins object based on the trash type
  if (trash === 'waste') { // this is where I needed to simplify instead of trying to creat 2 functions and mergeing a for each. way to complicated!
    bins.waste += 1; // keep out of statment for the object, still keeping the argument with the opperands in the (). this moves to the area where the return stament was with out the return statment. So confused. 
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
  
  // Return the updated bins object
  return bins;
}
/* note to myself, I need to keep this from becoming uneccsiarrily complicated. 
stay with 1 repository example from MDN or FCC or STOF. I am confusing myself by bouncing between everything. 

*/