/* calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)

/*Create the following 3 functions with the correct logic to calculate the area of that shape.

/*The parameters to the functions will always be numbers.

Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:

rectangle: length × width
triangle: base × height / 2
circle: π × radius2
If any of the parameters are negative, the function should return undefined.

Tips
To access the value of π in your JavaScript code, use Math.PI.
You may paste the following code after your function definitions to help you verify they work correctly. */

// try 3 also tided through jsfiddle, need to figure out remaining errors, 10 passes and 5 fails. 

let calculateRectangleArea = function(length, width) {
  if (length <= 0 || width <= 0) {
    return undefined;
  }
  return length * width;
};


let calculateTriangleArea = function(base, height) {
  if (base <= 0 || height <= 0) {
    return undefined;
  }
  return base * height / 2;
};

let calculateCircleArea = function( radius) {
  let circle = Math.PI * radius * radius; 
  if (radius === undefined || radius <= 0) {
    return undefined;
  }// use the 2 radius with splat instead of radius2 which could indicate multiplying by a square root accidentally 
  return circle;
};
console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined




