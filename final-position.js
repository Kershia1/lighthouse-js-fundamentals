/* Calculate movements North, South, West, East on a corresponding X/Y axix

array[0,0] will be array [X,Y]

1) each direction is 1 move
2) each move is taken as a string input, retured as numerical value
3) the final movements will be calculated and returned as the final elements in the array. 


Desired output: 
[-1,4]

*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = (moves) => {
  let x = 0;
  let y = 0;

  function paradeMoves(coord, x, y) {
    switch (coord) {
      case 'north': return [x, y + 1];
      case 'south': return [x, y - 1];
      case 'east': return [x + 1, y];
      case 'west': return [x - 1, y];
      default: return [x, y];
    }
  }

  for (const move of moves) {
    [x, y] = paradeMoves(move, x, y);
  }
  return [x, y];
};

finalPosition(moves);