// Q. 1 find the index of targte using binary search

var array = [1, 2, 3, 4, 5, 6, 7];
var target = 1;

const BinarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);

    const midElement = array[midIndex];

    if (target == midElement) {
      return `Found the target at ${midIndex} position`;
    } else if (target < midElement) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return "Element not Found";
};

// console.log(BinarySearch(array, target));

// Q. 2 find second smallest number in array

var array = [4, 1, 6, 2, 8];
var array = [10, 20, 30, 5, 7];

const Smallest = (array) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    if (array[i] < smallest) {
      // 4 < infinity  1 < 4 true
      secondSmallest = smallest; //  secondSmallest = inifinity
      smallest = array[i]; //  smallest = 4

      console.log("inside if");
      console.log(
        ` array[${i}] : ${array[i]} -- smallest : ${smallest} -- secondSmallest : ${secondSmallest}  `
      );
    } else if (array[i] < secondSmallest) {
      // 1 < infinity

      console.log("inside else if");

      secondSmallest = array[i]; // secondSmallest = 1
      console.log(`secondSmallest : ${secondSmallest}`);
    }
  }

  return secondSmallest;
};

// console.log(Smallest(array));

// var array = [10,20,30,5,7];

// function SecondSmallest (array){

//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   for(let i = 0 ; i < array.length ; i ++){

//     if (array[i] < smallest){

//       secondSmallest = smallest;

//       smallest = array[i];

//     }

//     else if (array[i] < secondSmallest){

//       secondSmallest = array[i];   }

//   }

//   return secondSmallest;

// }

// console.log(SecondSmallest(array))

// find the second smallest number from an array

var array = [10, 20, 30, 5, 6, 7];

function SecondSmallest(array) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (array[i] > smallest && array[i] < secondSmallest) {
      secondSmallest = array[i];
    }
  }

  return secondSmallest;
}

// console.log(SecondSmallest(array));

// find second largest

var array = [10, 30, 40, 99, 49];

const SecondLargest = (array) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;

      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  return `second largest : ${secondLargest}`;
};

// console.log(SecondLargest(array));

// Q.3

var word1 = "JavaScript is fun";

const ReverseWords = (string) => {
  var word = "";
  var result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      word = string[i] + word;
      // console.log(`word : ${word}`);
    } else {
      result += word + " ";
      word = "";
      // console.log(`result : ${result}`);
    }
  }

  result += word;
  return result;
};

console.log(ReverseWords(word1));

// Q. 4 find missing numebr in array

var array = [1, 2, 4, 5];
var n = 5;
// var array = [1, 3, 4, 5, 6];
// var n = 6;

const MissingNumber = (array, n) => {
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum;

  let missingNumber;

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  // actualSum = array.reduce((acc,cv)=> acc + cv, 0)

  actualSum = sum;

  missingNumber = expectedSum - actualSum;

  return ` missingNumber : ${missingNumber}`;
};

// console.log(MissingNumber(array, n));

var string = "aaabbcddd";

const StringCompression = (string) => {
  let result = "";

  let count = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      result += string[i] + count;
      count = 1;
    }
  }

  return result;
};

console.log(StringCompression(string));
