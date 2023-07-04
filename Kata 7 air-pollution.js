const checkAir = function(samples, threshold) { // remeber to check for missing semi-colons and errant {}'s'
  let dSamples = 0;
  let cSamples = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dSamples++;
    } else if (samples[i] === 'clean') {
      cSamples++;
    }
  }

  if (dSamples / samples.length > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Output: Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Output: Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)); // Output: Clean
