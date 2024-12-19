
/*
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = ['redness' + 'plumpness']; //array of objects I need to sum 
let highestMetric = -Infinity;// is an empty array the right thing to do here? I want it to keep to reference later // what I want to be returned when I loop over array // edit 4 use -Inifinty instead of 0, accidentally created an inifint loop. Had to review my range notes. ughhhh this will set to the smallest possible number avaliable in this case a -integer, thus allowing all subsequent numbers to be assesed at the highest sum. There by creating a way to store the values untill I can reach the actual highest sum. 
let MetricWithHighestSum; // when I had return created an unreachable code... actully typoed didn't space the let statement

for(const vegetables of vegetables) // iterate over array 
if (sum > highestMetric) { // had sum after if, not sure why ?
highestMetric = sum;
metricWithHighestSum = metric;
}
console.log(judgeVegetable(vegetables, metric)); 
return vegetables.submitter; // to get name?
// should hopefully return the highest combined metric of my key pair objects ? (fingers crossed) */

//try 4 finally returned a workign code, however vegatable is not defined, not returning the name of the highest submitter. Need to add something like return vegtables:submitter? as the highest value?

const judgeVegetable = function(vegetables, metric) {
  let highestMetric = -Infinity;
  let metricWithHighestSum;

  for (const veg of vegetables) {
    const sum = veg[metric];

    if (sum > highestMetric) {
      highestMetric = sum;
      metricWithHighestSum = veg.submitter;
    }
  }

  return metricWithHighestSum;
};

  
// should hopefully return the highest combined metric of my key pair objects ? (fingers crossed)