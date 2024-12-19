/* const carPassing = (cars, speed) {
  let time = Date.now(); 
  cars.push(time: time, speed: speed);
  console.log(cars);

 };
 const cars = [ // need to add
   {
     time: 1568329654807,
     speed: 40,
   },
   {
     time: 1568329821632,
     speed: 42,
   },
   {
     time: 1568331115463,
     speed: 35
   }
 ];
 
 const speed = 38;
 
 carPassing(cars, speed); this was try 4  */

 /* try 5 finally getting assertion errors to learn from 
 //const result = carPassing(cars, speed);
expect(result).to.be.an('array');
 //const length = cars.length
const speed = 38
const result = carPassing(cars, speed)
expect(result[3].time).to.be.above(result[2].time);
 //Assertion error #2 const result = carPassing(cars, speed);
expect(result.length).to.be.equal(4); */

 //
 const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

const carPassing = function(cars, speed) {
  let time = Date.now();
  cars.push(( time: time, speed: speed ));
  console.log(cars);
  return cars;
};

carPassing(cars, speed);

