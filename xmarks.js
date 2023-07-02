const finalPosition = function(moves) { // not I tried a for.. and ? loop didn't work, tried a for.. while didnt work, for of works, still confused about the move if moves sections.
  let x = 0;
  let y = 0;
  
  for (const move of moves) {
    if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    } else if (move === 'east') {
      x += 1;
    } else if (move === 'west') {
      x -= 1;
    }
  }
  
  return [x, y];
};
  console.log(finalPosition(['north', 'north', 'west', 'west', 'north', 'east','north'])); // note to self unrecoverable sytanx errors, check puncuation, spelling, brackets, logic, line spacing
