const instructorWithLongestName = function(instructors) { // similar to vowels just with names and counting all letters along index 
let longestName = instructors[0].name.length; 
let name = ' '; // remeber need this to loop through 
for (let i=1; i<instructors.length; i++) { // start from beginning of each string with a for loop
  if(instructors[i]name.length > longestName) { // checking the length of each instructors name in the to see which is longest then var updates
    name = instructors[i].name; // callback and fn
    course = instructors[i].course; // callback and fn need to review what these are called just remeber what it looks like gahh 

  }
}
return { 'name' : name, 'course': course};
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));