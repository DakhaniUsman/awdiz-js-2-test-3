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

    if (array[i] < smallest) {       // 4 < infinity  1 < 4 true
      secondSmallest = smallest; //  secondSmallest = inifinity
      smallest = array[i];       //  smallest = 4


      console.log("inside if")
      console.log(` array[${i}] : ${array[i]} -- smallest : ${smallest} -- secondSmallest : ${secondSmallest}  `)
    } else if (array[i] < secondSmallest) { // 1 < infinity

      console.log("inside else if")

      secondSmallest = array[i];    // secondSmallest = 1
      console.log(`secondSmallest : ${secondSmallest}`)

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



// Q.3

var word1 = "hello world";

const ReverseWords = (word) => {
  console.log(word);
let count = 0
  for (let i = 0 ; i < word.length ; i++){

    if(word[i] == " "){
      break;

    }
    console.log(count)
    console.log(word[i]);

    var array1 =
    count++;
  }

  for(let j = count ; j < word.length ; j ++){
    console.log(word[j])
  }



};

console.log(ReverseWords(word1));


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
