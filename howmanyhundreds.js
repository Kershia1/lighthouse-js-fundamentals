let x = 1000;
const howManyHundreds = function(bottles) {
  let amount = (bottles / 100);
  let remainder = % amount; 
  return bottles; 
}

// gets me the divison and 5 passes but 6 faliures since I need to remove the remainder with modulus and can't remeber how. 

// try 2 
let x = 1000;
let y = 99;
const howManyHundreds = function(bottles) {
  return (bottles %= 100);
}

// try 3 Math.floor or Math.ceil it finally fing worked!!!!! Math.floor rounds down to the nearest integer. WOOT
const howManyHundreds = function(bottles) {
  return Math.floor(bottles / 100);
}
