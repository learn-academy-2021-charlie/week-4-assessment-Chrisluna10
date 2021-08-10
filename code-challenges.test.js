// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { remove } = require("jest-util/build/preRunMessage")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("removeAndShuffle", () => {
    it("returns an array that is shuffled without the first item", () => {
      expect(removeAndShuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
      expect(removeAndShuffle(colors2)).toEqual(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
    })
  })

// b) Create the function that makes the test pass.

// create a function called removeAndShuffle
// create varible to shift first item in array
// use math.random to randomize array after shifting first item out.

const removeAndShuffle = (array) => {
    let shuffle = array.shift()
    console.log(shuffle)
    let randomize = Math.floor(Math.random() * array.length)
    return randomize
}
console.log(removeAndShuffle(colors1))


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minAndMax", () => {
        it("returns an array of the minimum and max numbers in that order", () => {
          expect(getMinMax(nums1)).toEqual([-8, 90])
          expect(getMinMax(nums2)).toEqual([5, 109])
        })
      })


// b) Create the function that makes the test pass.

// create function called getMinMax
// parameter - arrau
// create two new arrays called maximum and minimum
// use math.max to output the largest number in the array
// use math.min to output the largest number in the array
// create new variable that takes in those two arrays for the correct output.

const getMinMax = (arr) => {
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
   let result =  ([minimum, maximum]); 
    return result;
  };
console.log(getMinMax(nums1))
console.log(getMinMax(nums2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("removeDuplicates", () => {
        it("returns an array with no duplicates", () => {
          expect(removeDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
      })


// b) Create the function that makes the test pass.

// program to merge and remove duplicate value from an array

// create a function named removeDuplicates
// parameter - array
// create a new variable
//  joins the two arrays together in the new variable
// return the new array and filter out any values that equal other index

const removeDuplicates = (array1, array2) => {
    let joinedArray = array1.concat(array2)
    return joinedArray.filter((value, index) => joinedArray.indexOf(value) === index);
  }
  console.log(removeDuplicates(testArray1, testArray2))

