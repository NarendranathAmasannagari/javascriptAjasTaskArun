//1

//output : [2,3,4]  

// var b = ["2", "3", "4", "2", "3"];
// var uniqueNumbers = [];

// for (var i = 0; i < b.length; i++) {
//   var num = Number(b[i]);  // Convert the string to a number
//   if (uniqueNumbers.indexOf(num) === -1) {
//     uniqueNumbers.push(num);  // Add the number if it is not already in the array
//   }
// }

// console.log(uniqueNumbers);


// 2. var b = ["Hello","Hello","Hello"] add the numbers in a string 
// Output:- ["Hello0","Hello1","Hello2"]

// var b = ["Hello", "Hello", "Hello"];
// var result = [];

// for (var i = 0; i < b.length; i++) {
//   result.push(b[i] + i);
// }

// console.log(result);


// 3. Let a=["1","5","8","10"]==>Display the missing numbers in an array 
 // Output:- ["2","3","4","6","7","9"]

// var a = ["1", "5", "8", "10"];
// var missingNumbers = [];

// for (var i = 1; i <= 10; i++) { // Iterate from 1 to 10
//     var found = false;

//     for (var j = 0; j < a.length; j++) {
//         if (parseInt(a[j]) === i) {
//             found = true; // Set flag to true if number is found
//             break; // Exit inner loop
//         }
//     }

//     if (!found) {
//         missingNumbers.push(i); // Add missing number to the array
//     }
// }

// console.log(missingNumbers); // Output: [2, 3, 4, 6, 7, 9]

// 4. let str = "dellboomi"; 
// output is:{ d:1, e:1, l:2, b:1, o:2, m:1, i:1}. 

// let str = "dellboomi";
// let charCount = {};

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char in charCount) {
//         charCount[char]++;
//     } 
//     else {
//         charCount[char] = 1;
//     }
// }

// console.log(charCount); // Output: { d: 1, e: 1, l: 2, b: 1, o: 2, m: 1, i: 1 }

//  5. Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times ) .

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mostFrequent = 1;
// var m = 0;
// var item;

// for (var i = 0; i < arr1.length; i++) {
//   for (var j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mostFrequent < m) {
//       mostFrequent = m;
//       item = arr1[i];
//     }
//   }

//   m = 0;
// }

// console.log(item + " ( " + mostFrequent + " times ) ");
  
//  6. Write a JavaScript program to remove duplicate values in a JavaScript array.
// input: let array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// Output:- [1,2,-2,4,5,7,8,71,3,6]


// let array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// let uniqueArray = [];

// // Loop through each element in the original array
// for (let i = 0; i < array.length; i++) {
//     let currentItem = array[i];
//     let isDuplicate = false;

//     // Check if the current item already exists in the uniqueArray
//     for (let j = 0; j < uniqueArray.length; j++) {
//         if (uniqueArray[j] === currentItem) {
//             isDuplicate = true; // Mark as duplicate if found
//             break; // Exit the inner loop
//         }
//     }

//     // If not a duplicate, add it to uniqueArray
//     if (!isDuplicate) {
//         uniqueArray.push(currentItem);
//     }
// }

// console.log(uniqueArray);
