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

// Q. 2 find smallest number in array

var array = [4, 1, 6, 2, 8];
var array = [10, 20, 30, 5, 7];

const Smallest = (array) => {

};

// console.log(Smallest(array));

// Q.3

var word1 = "hello world";

const ReverseWords = (word) => {
  console.log(word);




};

// console.log(ReverseWords(word1));


// Q. 4 find missing numebr in array

var array = [1, 2, 4, 5];
var array = [1, 3, 4, 5, 6];

const missingNumber = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] !== i) {
      return i;
    }
  }
};

// console.log(missingNumber(array));

var string = "aaabbcddd";

const StringCompression = (string) => {
  let output = {};

  for (let i = 0; i < string.length; i++) {
    let count = 0;

    for (let j = 0; j < string.length; j++) {
      if (string[i] == string[j]) {
        count++;
        output[string[i]] = count;
        console.log(output);
      }
    }
    // for ()
  }

  return output;
};

// console.log(StringCompression(string));
