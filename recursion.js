// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

/*
note to self
  make sure to understand the base case of the recursion and program around that to ensure that the function does not infinitely looooooop
*/

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) {
    return len;
  }
  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

function sumOfArray(inputArray) {
  // This function returns the sum of all of the numbers in a given array.
  let numArray = inputArray
  let arrayLength = inputArray.length
  //base case
  if (arrayLength <= 0) {
    return 0
  }
  return (sumOfArray(numArray, arrayLength -1) + inputArray[arrayLength - 1])  
}

function findMax(inputArray) {
  // This function returns the largest number in a given array.
  
  //handling cases of array length
  if (inputArray.arrayLength === 1) {
    return inputArray[0]
  }

  //this is the base case of the comparison logic
  if (inputArray.length === 2) {
    return (inputArray[0] > inputArray[1] ? inputArray[0] : inputArray[1])
  }
  //handling the entire array and creating the recursion call
  const secondaryArray = findMax(inputArray.slice(1))
  return (inputArray[0] > secondaryArray ? inputArray[0] : secondaryArray)
}

function factorial(inputFactNum) {
  // This function returns the factorial of a given number.
  
  //handling case of 0 of input
  if (inputFactNum === 0) {
    return 1
  } else {
    return inputFactNum * factorial(inputFactNum - 1)
  }

}

function fibonacci(inputNum) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1

  if ( inputNum <= 1) {
    return inputNum
  }
  return fibonacci(inputNum -1) + fibonacci(inputNum - 2)
}

function coinFlips(inputNum) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  const outputArray = []

  function flipTester(inputNum , outputArray, currentState) {
    // case of one flip of a coin

    /*
    take the other two paramaters and define them as their own variables scoped to the function
    */
    if (inputNum === 1) {
      outputArray.push(current + 'H')
      outputArray.push(current + 'T')
    } else {
      flipTester(inputNum - 1, outputArray, currentState + 'H')
      flipTester(inputNum - 1, outputArray, currentState + 'T')
    }
  }
  flipTester(inputNum, outputArray, currentState)
  return outputArray
}

function letterCombinations(inputStr) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  

  //input[0] = a
  //input[1] = b
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};