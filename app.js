/*
Calculates the average from a series of values.
@param {array(object)[number, string]} numberArray - Accepts a one dimension array of numeric values. Numeric values as strings will be converted. Other value types with cause this function to return an error.
*/
function getAverage(numberArray) {
  const DROPS = 2
  if (numberArray.length < 3) {
    return "After dropping the two lowest values, there is nothing left to calculate. Please submit more than 2 scores."
  }

  for (let x = 0; x < DROPS; x++) {
    let min = Math.min(numberArray)
    // Doesn't affect original array numberArray.filter(e => e != min)
  }
  // numberArray.sort(function(a, b) {
  //   if (isNaN(a) || isNaN(b)) {
  //     return "Error: Values must only contain numbers."
  //   }

  //   return a - b
  // }).numberArray.splice(0, 2) // Sort the array and remove the first two items.

  // Use reduce to total numbers instead of a foreach loop. This will concat the string values, so they need to be converted to numbers.
  let total = numberArray.reduce((runningTotal, currentVal) => (+runningTotal) + (+currentVal)) // Iterate through each element and add them together.
  let average = total / numberArray.length // Basic arithmetic.
  return average.toFixed(1) // One decimal place.
}

// Test data for getAverage function:
// console.log("Test 1: " + getAverage(['4', '1', '6', '10', '2', '3']))  //5.75
// console.log("Test 2: " + getAverage([4, 1, 6, 10, 2, 3])) //5.75
// console.log("Test 3: " + getAverage(["4", 1, "6", 10, '2', 3])) //5.75
// console.log("Test 4: " + getAverage([4.6, 1.3, 0.6, 10.34, 2.00001, 0.0000003])) //4.56
// console.log("Test 5: " + getAverage([-4, 1, 6, -10, 2, -3])) //1.5
// console.log("Test 6: " + getAverage(['a', 'b', 'c', 'd', 'e', 'f'])) // Validation error message. **Fail - is returning 'NaN'.
// console.log("Test 7: " + getAverage([])) // Validation error message.
// console.log("Test 8: " + getAverage([1])) // Validation error message.
// console.log("Test 9: " + getAverage([1,2])) // Validation error message.
// console.log("Test 10: " + getAverage([1,2,3])) // 3.0
// console.log("Test 11: " + getAverage([NaN])) // Validation error message.
console.log("Test 12: " + getAverage([0, 0, 0, 0, 0, 0, 0])) // 
console.log("Test 12: " + getAverage([1, 2, 1, 2, 1, 2, 1, 2])) // 
console.log("Test 12: " + getAverage([1, 1, 2, 2, 3])) // 
console.log("Test 12: " + getAverage([1, 1, 2, 3, 3])) // 

/*
Generates an array of random numbers.
@param {number, numeric string} numValues:default 100 - The number of values to generate. If value is non-numeric, the default value is used.
*/
function generateRandomNumbers(numValues) {
  numValues = +numValues || 100
  let numberArray = []

  for (let i = 0; i < numValues; i++) {
    let number = Math.floor((Math.random() * 50) + 50) // I want values between 50 and 100, like real test scores.
    numberArray[i] = number
  }

  return numberArray
}

// let numArray = generateRandomNumbers(5)
// console.log(getAverage(numArray))

// For fun, I want to see the average if the averages above.
// let avgAverageArray = []
// let avgVal
// for (let n = 0; n < 100; n++) {
//   avgVal = getAverage(largeArray)
//   console.log(avgVal)
//   avgAverageArray[n] = avgVal
// }
// console.log(getAverage(avgAverageArray))