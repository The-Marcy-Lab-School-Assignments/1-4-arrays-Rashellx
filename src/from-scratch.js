const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};
//console.log(addToFrontOrBack())

const reverseString = (str) => {
  const arr = str.split('').reverse().join('')
  return arr
};
//reverseString('hello')


const newArrayFullOf = (value, numOfValue) => {
  let arr = new Array(numOfValue).fill(value)
  return arr
};
//console.log(newArrayFullOf(1, 5))

//Question 4
const insertIntoMiddle = (arr, value) => {
  const mid = (Math.floor(arr.length / 2))
  arr.splice(mid, 0, value)
  //return arr
};
//console.log(insertIntoMiddle([1, 2, 3], 6))

//Question 5
const deleteFromMiddle = (arr) => {
  const mid = (Math.floor(arr.length / 2))
  arr.splice(mid, 1)
  //return arr
};
//console.log(deleteFromMiddle([1, 2, 3, 4, 5]))

//Question 6
const isRightIndex = (arr, value, index) => {
  return arr[index] === value
};

// let testArray6 = ['yo', 'hi', 5]
// console.log(isRightIndex(testArray6, 'yo', 1))

const roundAllNumsDown = (arr) => {
  return arr.map((x) => Math.floor(x))
};

//let testArray7 = [1.1, 9.9]

const getAllYCoordinates = (arrOfCoords) => {
  let newArray = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArray.push(arrOfCoords[i][1]);
  }
  return newArray;
};
console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]));

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
