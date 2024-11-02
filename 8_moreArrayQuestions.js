// Array methods questions:

// 1)Convert the following string into an array of words

// let sentence = "Learning JavaScript is fun";
// Expected output:
// ['Learning', 'JavaScript', 'is', 'fun']

// let sentence = "Learning JavaScript is fun"
// let result = sentence.split(" ")
// console.log(result);


// /////////////////////////////////
// 2)Remove the first element from this array:

// let numbers = [10, 20, 30, 40];
// Expected output:
// [20, 30, 40]
// //////////////////////////////////

// let numbers = [10, 20, 30, 40];
// let result = numbers.splice(0,1)
// console.log(numbers);

// 3)Add the number 5 at the beginning of this array:

// let numbers = [10, 20, 30, 40];
// Expected output:
// [5, 10, 20, 30, 40]

// let numbers = [10, 20, 30, 40];
// let result = numbers.unshift(5)
// console.log(numbers);


// ////////////////////////////////
// 4)Check if the array contains the element 15:

// let numbers = [5, 10, 15, 20];
// Expected output:
// true

// let numbers = [5, 10, 15, 20];
// console.log(numbers.includes(15))
// ;

// ////////////////////////////////
// 5)Remove the second and third elements from this array:

// let numbers = [10, 20, 30, 40, 50];
// Expected output:
// [10, 40, 50]

// let numbers = [10, 20, 30, 40, 50];
// let result = numbers.splice(1, 2)
// console.log(numbers);


// ////////////////////////////////
// 6)Create a new array containing the second and third elements from this array:

// let numbers = [10, 20, 30, 40, 50];
// Expected output:
// [20, 30]

// let numbers = [10, 20, 30, 40, 50];
// let result = numbers.slice(1, 3)
// console.log(result);


// ///////////////////////////////////
// 7)Check if all elements in this array are greater than 5:

// let numbers = [10, 20, 30, 40];
// Expected output:
// true

// let numbers = [10, 20, 30, 40];
// let result = numbers.map(num => num > 5)
// console.log(result);


// ///////////////////////////////////////
// 8)Create a new array with each element doubled:

// let numbers = [1, 2, 3, 4];
// Expected output:
// [2, 4, 6, 8]
// ////////////////////////////////////////

// let numbers = [1, 2, 3, 4];
// let result = numbers.map(num => num * 2) 
// console.log(result);


// 9)Add the number 50 to the end of this array:

// let numbers = [10, 20, 30, 40];
// Expected output:
// [10, 20, 30, 40, 50]

// let numbers = [10, 20, 30, 40];
// let result = numbers.pop()
// console.log(result);

// ///////////////////////////////////////
// 10) Remove the last element from this array:

// let numbers = [10, 20, 30, 40];
// Expected output:
// [10, 20, 30]

// ///////////////////////////////////////
// 11): Reverse the order of elements in this array:

// let numbers = [1, 2, 3, 4];
// Expected output:
// [4, 3, 2, 1]

// let numbers = [1, 2, 3, 4];
// let result = numbers.reverse();
// console.log(result);


// /////////////////////////////////////////
// 12)Convert the following array into a string, separating elements by commas:

// fruits.reverse();
// const words = ["apple", "banana", "cherry"]; 
// Expected output:
// "apple,banana,cherry"

// const words = ["apple", "banana", "cherry"]; 
// let result = words.toString().split(" ");
// console.log(result);

// ///////////////////////////////////////////////
// 13)convert nested array into a single-level array:

// let nestedArray = [1, [2, 3], [4, 5]];
// Expected output:
// [1, 2, 3, 4, 5]
// ///////////////////////////////

// let nestedArray = [1, [2, 3], [4, 5]];
// let result = nestedArray.flat(Infinity)
// console.log(result);


// 14) Join all the elements of the array into a string separated by -:

// let words = ['Hello', 'world', 'JavaScript'];
// Expected output:
// "Hello-world-JavaScript"

// let words = ['Hello', 'world', 'JavaScript'];
// let result = words.join('-');
// console.log(result); 

// ///////////////////////////////////////
// 15) Combine two arrays into one:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Expected output:
// [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr1, ...arr2]
// console.log(result);

// /////////////////////////////////
// 16)Check if the following is an array:

// let value = [1, [2], 3,4,"hi"];

// let arr = [1, [2], 3,4,"hi"];

// Array.isArray();

///////////////////////////////////////

// 17) Print each element in the array to the console:

// let fruits = ['apple', 'banana', 'cherry',undefined];

// let fruits = ['apple', 'banana', 'cherry',undefined];
// for(let i = 0 ; i< fruits.length ; i++){
//     console.log(fruits[i]);
// }

// 18)
// Find the length of an array.

// Example:
// Input: ["dog", "cat", "fish",Null]
// Output: 3

// let words = ["dog", "cat", "fish",Null]
// console.log(words.length);


// /////////////////////////////////////////////////////////
// //////////////////////////////
// 19)for the given array Remove any negative numbers from the array,
// Double each remaining number,
// Check if every number is even after the transformation,
// Return the sum of the transformed numbers if all are even, otherwise return null.
