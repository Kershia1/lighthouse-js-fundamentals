/* Refactor code for easier readability
 1) Iterate over the array of given stations to find stations which meet the two given conditions,(may possibly try to filter out both null factors 1st): 

  a) capactiy >= 20
       if capactiy < 20 return null;

  b) venue === school || communityCenter 
       if venue === resturant return null;

  c) return only passing venues name;

  e) Example input array: 
  const stations = [
  ['Big Bear Donair', 10, 'restaurant'],

  d) example of desired output: 
  ['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const goodStations = [];
  for ( const station of stations) {
    const name = station[0];
    const capacity = station[1];
    const venue = station[2];
    if (capacity >= 20 && (venue === 'school' || venue === 'community centre')){
      goodStations.push(name);
    }
  }
  return goodStations;
};

chooseStations(stations);

// const stations = [ // declared what are stations 
//   ['Big Bear Donair', 10, 'restaurant'], // each is an array with name , capacity, and venue type.
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];
// const chooseStations = function (stations) { // creating for loop to check each
//   const rightStation = []; // empty arry to loop through had accidentally placed a [0] here to index to o as in the 1st station.
//   for (const stations of stations) {
//     const venueType = stations [0];
//     if(stations [0] >= 20 && (venueType ==='school' || venueType === 'community center')) {
//       rightStations.push(stations(0)); // tried again to puch this to the 1st indexed station of my array in the parameter
//     }
//   }
//   console.log(chooseStations(stations)); // I need to run through the outloop upper loop? to escape the block and use each array ?
// };

// console.log(chooseStations(stations));
// // error during lint process is returning stations as undefined


// //Troubleshooted code with Friends which passed lint need to compare side by side with the larger monitor: 
// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// const chooseStations = function (stations) {
//   const rightStations = [];
//   for (const station of stations) {
//     const venueType = station[2];
//     if (station[1] >= 20 && (venueType === 'school' || venueType === 'community centre')) {
//       rightStations.push(station[0]);
//     }
//   }
//   return rightStations;
// };

// console.log(chooseStations(stations));