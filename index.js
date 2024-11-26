// Question 1 : Reverse a string

var input = "hello";
var input = "world";
var input = "javascript";
var output = "";

function Question1(input, output) {
  for (let i = input.length - 1; i >= 0; i--) {
    // console.log(input[i]);
    output += input[i];
  }

  return output;
}

// console.log(Question1(input, output));

// Question 2 : Check if a string is Palindrome

var input = "radar";
var input = "hello";
var input = "level";

// 0 4
// 1 3

function Question2(input) {
  const midIndex = Math.floor(input.length / 2 - 1);
  for (let i = 0; i <= midIndex; i++) {
    // console.log(input[i], input[(input.length - 1) - i]);

    if (input[i] !== input[input.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// console.log(Question2(input));

// Question 3 : Find the largest number in an array

var input = [1, 3, 5, 2];
var input = [7, 2, 9, 4];
var input = [-3, -1, -7, -2];
var temp;
var output = input[0];

function Question3(input, output, temp) {
  for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    temp = input[i];

    if (temp > output) {
      output = temp;
    }
  }

  return output;
}

// console.log(Question3(input, output, temp));

// Question 4 : Check if two strings are anagrams

var string1 = "listen";
var string2 = "silent";

var string1 = "hello";
var string2 = "world";

var string1 = "cinema";
var string2 = "iceman";

var matched = false;

function Question4(string1, string2) {
  for (let i = 0; i < string1.length; i++) {
    console.log(string1[i]);

    for (let j = 0; j < string2.length; j++) {
      console.log(string2[j]);

      if (string1[i] === string2[j]) {
        matched = true;
        break;
      }
    }

    if (matched == false) {
      return false;
    }
  }

  return true;
}

// console.log(Question4 (string1,string2));

// Question 5 : count vowels in a string

var input = "hello";
var vowels = "aeiou";

var input = "javascript";

var input = "why";

var count = 0;

function Question5(input, vowels, count) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

// console.log(Question5(input, vowels, count));

// Question 6 : Remove Duplicates from an array

var input = [1, 2, 2, 3];

var input = [5, 5, 5, 5];

var input = [1, 2, 3, 4];

// 1 2 2 3
// push
// 2 2 3

var output = [];

function Question6(input, output) {
  for (let i = 0; i < input.length; i++) {
    let duplicate = false;

    for (let j = 0; j < output.length; j++) {
      if (input[i] === input[j]) {
        duplicate = true;
        break;
      }
    }

    if (duplicate == false) {
      output.push(input[i]);
    }
  }

  return output;
}
// console.log(Question6(input, output));

// Question 7 : Find the intersection of two arrays

var array1 = [1, 2, 3];
var array2 = [2, 3, 4];

var array1 = [5, 6];
var array2 = [6, 7];

var array1 = [8, 9];
var array2 = [10, 11];

var output = [];

function Question7(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        output.push(array1[i]);
      }
    }
  }

  return output;
}

// console.log(Question7(array1, array2, output))

// Question 8 : Find first non repeating character

var input = "swiss";

var input = "level";

var input = "aabbcc";

function Question8(input) {
  for (let i = 0; i < input.length; i++) {
    let repeating = false;

    for (let j = 0; j < input.length; j++) {
      if (i !== j && input[i] === input[j]) {
        repeating = true;
        break;
      }
    }

    if (repeating == false) {
      return input[i];
    }
  }

  return "";
}

// console.log(Question8(input));

// Question 9 : merge two sorted arrays

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];

function Question9(array1, array2) {
  let mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Merge elements from both arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// console.log(Question9(array1, array2));

// Question 10 : move zeros to end

var input = [0, 1, 0, 3, 12];

var input = [0, 0, 0];

var input = [1, 2, 3];
var greaterThan0 = [];
var lesserThan0 = [];
var output = [];

function Question10(input, greaterThan0, lesserThan0) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);

    if (input[i] <= 0) {
      console.log(input[i], "<0");
      lesserThan0.push(input[i]);
    }

    if (input[i] > 0) {
      console.log(input[i], ">0");
      greaterThan0.push(input[i]);
    }
  }

  for (let j = 0; j < lesserThan0.length; j++) {
    greaterThan0.push(lesserThan0[j]);
  }

  return greaterThan0;
}

// console.log(Question10(input, greaterThan0, lesserThan0));

// Question 11 : find missing number in sequence

var input = [1, 2, 4, 5];

var input = [3, 5, 6, 7];
var start = input[0];

function Question11(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(start, input[i]);
    if (start !== input[i]) {
      return start;
    }
    start++;
  }
}

// console.log(Question11(input));

// Question 12 : find the index of target

var input = [4, 5, 6, 7, 0, 1, 2];
var target = 0;

var input = [3, 4, 5, 1, 2];
var target = 2;

var input = [1];
var target = 0;

function Question12(input, target) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(Question12(input, target));

// Question 13 : check if array contains duplicate

var input = [1, 2, 3, 1];
var input = [1, 2, 3, 4];
var input = [1, 1];
var element;

function Question13(input) {
  for (let i = 0; i < input.length; i++) {
    element = input[i];

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] === element) {
        return true;
      }
    }
  }
  return false;
}

// console.log(Question13(input));

// Question 14 : check if number is a prime number

var input = 5;
var input = 4;
var input = 11;
// number divisible by itslef and one only

function Question14(input) {
  if (input <= 1) {
    return false;
  }

  for (let i = 2; i < input; i++) {
    if (input % i == 0) {
      return false;
    }
  }

  return true;
}

// console.log(Question14(input));

// Question 15 : Generate a fibonacci sequence

// fibonacci sequence means the number is sum to twow preceeding numbers
// means (i - 2) + (i - 1)

var input = 5;
var input = 1;
var output = [0, 1];

function Question15(input) {
  if (input == 1) {
    output = [0];
  }
  for (let i = 2; i < input; i++) {
    output.push(output[i - 1] + output[i - 2]);
  }

  return output;
}
// console.log(Question15(input));

// Question 16 : find the max subarray sum

var input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var input = [1, 2, 3, 4];
var input = [-1, -2, -3];
var max = input[0];
var temp = 0;

function Question16(input, max, temp) {
  for (let i = 0; i < input.length; i++) {
    temp += input[i];
    console.log(temp, "temp");

    if (temp > max) {
      max = temp;
      console.log(max, "max");
    }

    if (temp < 0) {
      temp = 0;
    }
  }

  return max;
}
// console.log(Question16(input, max, temp));

// Question 17 : sort an array

var input = [3, 1, 2];

function Question17(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      if (input[j] > input[j + 1]) {
        console.log(input[j], "input[j]");
        let temp = input[j];
        console.log(temp, "temp");
        input[j] = input[j + 1];
        console.log(input[j], "input[j]");
        input[j + 1] = temp;
        console.log(input[j + 1], "input[j + 1]");
      }
    }
  }
  return input;
}

// console.log(Question17(input))

// 18 :

var input = "()";
var input = "(]";
var input = "{}";
var count;
// console.log(input.length);

function Question18(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "(") {
      console.log("opening");
      count++;
    } else if (input[i] == ")") {
      console.log("closing");
      count--;
    }
  }

  if (count == 0) {
    return true;
  } else {
    return false;
  }
  
}

console.log(Question18(input));

// 19

var input = 5;

var input = 4;

var input = 0;
var product = 1;

function Question19() {
  for (let i = 1; i < input; i++) {
    // console.log(input, i);
    product += product * i;
  }

  return product;
}

// console.log(Question19());

// 20 : Count the frequency of elements in an array

var input = [1, 2, 2, 3];

var input = [4, 4, 4];

var input = [5, 6];
var element;
var count = 0;

function Question20() {
  for (let i = 0; i < input.length; i++) {
    element = input[i];

    for (let j = 0; j < input.length; j++) {
      if (input[j] === element) {
        count++;
      }
    }

    console.log(input[i], ":", count);
    count = 0;
  }
}

// console.log(Question20());
