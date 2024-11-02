// task on Array methods,

// Array Methods:
// --------------

// 1.Write a array of numbers that finds the index of a specific value in an array using a 
//for loop  then confirm the result using the index Of method.
// const numbers = [10, 20, 30, 40];
// const value = 30;
// // Output: 2

// const numbers = [10, 20, 30, 40];
// const value = 30;

// let givenArray = [10, 20, 30, 40];
// let findingValue = 30;

// let indexingValue = 0 

// for(let index = 0 ; index < givenArray.length ; index ++) {
//     console.log("Yogesh");
    
// }






// 2.Write a array of numbers that reverses the elements of an array using the reverse method.
// const numbers = [1, 2, 3, 4, 5];
// // Output: [5, 4, 3, 2, 1]

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     reversedNumbers.push(numbers[i]);
// }

// console.log("Reversed array:", reversedNumbers); // Output: [5, 4, 3, 2, 1]

// 3.Write array of numbers that merges two arrays using a the concat method.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // Output: [1, 2, 3, 4, 5, 6]

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const mergedArray = array1.concat(array2);

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 4.Write array of numbers that checks if an array contains a specific value using includes method.
// const numbers = [10, 20, 30, 40];
// const target = 30;
// // Output: true

// const numbers = [10, 20, 30, 40];
// const n = 30;

// const result = numbers.includes(n);

// console.log(result); // Output: true

// 5.Create array of numbers that flattens a nested array (single-level deep) using a flat method.
// const nested Array = [1, [2, 3], [4, 5]];
// // Output: [1, 2, 3, 4, 5]

// const nestedArray = [1, [2, 3], [4, 5]];

// const flatArray = nestedArray.flat();

// console.log(flatArray);


// 6.Converts all string elements in an array to uppercase using a toUpperCase method.
// const words = ['hello', 'world']; 
// // Output: ['HELLO', 'WORLD']

// const words = ['hello', 'world'];
// const uppercasedWords = words.map(word => word.toUpperCase());

// console.log(uppercasedWords);


// 7.Write array of numbers that finds the first negative number in an array using a find method.
// const numbers = [3, 5, -2, 4, -1];
// // Output: -2

// const numbers = [3, 5, -2, 4, -1];

// const firstNegative = numbers.find(num => num < 0);

// console.log(firstNegative);


// 8.Write array of numbers that sorts an array of numbers in ascending order using the sort method.
// const numbers = [3, 1, 4, 2];
// // Output: [1, 2, 3, 4]

// const numbers = [3, 1, 4, 2];

// const sortedNumbers = numbers.sort((a, b) => a - b);

// console.log(sortedNumbers);


// 10.Write array of numbers that merges two sorted arrays into one sorted array using concat followed by sort.
// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];
// // Output: [1, 2, 3, 4, 5, 6]

// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];

// const mergedArray = array1.concat(array2).sort((a, b) => a - b);

// console.log(mergedArray);


// 11.Write array  that counts the total number of vowels in an array of strings using for loop,if-else condition and the split method.
// const words = ["apple", "banana", "cherry"];
// // Output: 8



// 12.Write array of numbers that separates even and odd numbers from an array into two different arrays using a for loop and if-else conditions.
// const numbers = [1, 2, 3, 4, 5, 6];
// // Output:[2, 4, 6][1, 3, 5]
// 13.Write array of numbers that finds the common elements between two arrays using a for loop,if-else condition and includes method.
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// // Output: [3, 4]
// 14.Write array of numbers that finds the second largest number in an array using a for loop, if-else condition.
// const numbers = [10, 5, 8, 20];
// // Output: 10

// 15.Write array of numbers that inserts an element at a specific index using a splice method.
// const numbers = [1, 2, 4, 5];
// const element = 3;
// const index = 2;
// // Output: [1, 2, 3, 4, 5]
 
 
// Arrays:
// 1.Find Maximum in an Array:
// 2.Reverse an Array:
// Write a function using a loop that takes an array and returns the array in reverse order.
// 3.Find the Index of an Element:
// Write a for loop to find the index of a specific value in an array, e.g., find the index of 'green' in let colors = ['red', 'blue', 'green', 'yellow'].
// 4.Remove Duplicates:+
// Write a function using a for loop to remove duplicate values from an array let arr = [1, 2, 3, 2, 4, 1, 5].
// .................................................................................................................................................
// Loops:
// 1.FizzBuzz Problem:
// Write a for loop that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz".
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".
// 2.Factorial:
// Write a for loop to find the factorial of a number n. For example, if n = 5, the result should be 5 * 4 * 3 * 2 * 1 = 120.
// 3.Sum of Multiples:
// Write a for loop that calculates the sum of all multiples of 3 or 5 below 1000.
// 4.Count Vowels in a String:
// Write a loop to count the number of vowels (a, e, i, o, u) in a given string.
// Break and Continue:
// 5.Write a loop that prints numbers from 1 to 10 but skips the number 5 using the continue statement. Stop the loop entirely when the number reaches 8 using
// the break statement.
// .................................................................................................................................................
// Data Types:
 
// 1.Write a function that takes a value and returns its data type.
// 2.Write a function that checks if a given value is an array.
// 3.Write a function that checks if a value is undefined or null.
// 4.Write a function that converts a string "123" to a number and checks its type.
// 5.Write a function that converts a boolean value (true or false) to a string, and then back to a boolean.
 
// .................................................................................................................................................
// Operators:
// 1.Modulus Operator:
// Write a program that uses the modulus operator % to check if a number is even or odd.
// 2.Nullish Coalescing Operator (??):
// Use the nullish coalescing operator to provide a fallback value for a variable that might be null or undefined.
// 3.Find the Largest of Three Numbers Using Ternary Operator:3.
// 4.Write a function to find the largest of three numbers using a ternary operator.
// 5.Write a function that returns the result of raising a base number to a given power using the exponentiation operator (**).
