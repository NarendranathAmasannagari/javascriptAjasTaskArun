// 1.Count how many times a letter occurring in a string
//          input :
//          Output : { s : 1, r : 1, i : 2, v : 1,e : 1, n : 1, p: 1, o:1, g:1, u:1, l:1, a:1 }

// let word = "NARENDRANATH AMASANNAGARI";

// word = word.toLowerCase();  //convert's to lower case
// word = word.replace(/\s+/g, '');  //removes spaces

// let charCount = {}; // created a new object

// for (let char of word) { //iterated over chars of word
//   if (charCount[char]) {  //
//     charCount[char]++;
//   } else {
//     charCount[char] = 1;
//   }
// }

// console.log(charCount);

// 2. replace all Vowels(By taking one sample text json file) in object body value (string)  with  #
//Sample JSON object





// // Call the function
// replaceVowels(jsonData);

// // Log the modified JSON object
// console.log(jsonData);

// 3.Take one array and add first all even numbers and second all odd numbers in a digit.
//          Input:[2435,982,5642,1232,87]
//          Output:[68,109,125,44,87]let arr = [2435,982,5642,1232,87]

// let arr =[2435,982,5642,1232,87]
// let result=[]
// arr.map((data,i)=>{
//     let even=0
// let odd=0
//     data.toString().split("").map((data1,i)=>{
//            data1%2==0?even+=parseInt(data1):odd+=parseInt(data1)
//     })
//     let c=even==0?"":even.toString()
//     let b=odd==0?"":odd.toString()
//     console.log(c,b);

//     let a=c+b
//     result.push(parseInt(a))

// })
// console.log(result);

// 4.Take One Array and do the process as if the number consists more than 2 digits To check the conditions as
// =>First and last numbers  will be added .
//     Input: [287, 7342, 934757,66542,75,765765]
//     Output: [98,97,16811,8105,12,121212]

// let a = [287, 7342, 934757, 66542, 75, 765765, 5677865];

// let b = [];

// a.map((data) => {
//     //console.log(data);
    
//     let sp = data.toString().split("");
//     //console.log((sp));
    
//     let c = 0
//     if (sp.length % 2 == 0) {
//         while (sp.length > 0) { //4 > 0 // 2 >0  //0 >0
//             let f = parseInt(sp.shift());
//             //let f = parseInt(sp[0])
//             let l = parseInt(sp.pop());
//             let sum = f + l;
//             console.log(sp);
            
//             c += sum.toString();
//         }
//     } else {
//         while (sp.length > 1) {
//             let f = parseInt(sp.shift());
//             let l = parseInt(sp.pop());
//             let sum = f + l;
//             c += sum.toString();
//         }
//         c = c + sp[0];
//     }

//     b.push(parseInt(c));
// });

// console.log(b);

// 5.Take One Array Consists of all digits like single digit numbers,double,triple
// and more in that you have follows some  rules:-
//   =>if it is one digit even or odd number we can add 0 in absence place
// =>if it is 2 or more digits we have to count all even and odd numbers.
// Note:-In Output 1st Digit Represents Odd and 2nd Digit Represents Even.
//    Input:[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432]
// Output:[10,10,01,01,11,11,20,11,20,02,21,03,21,21,22,22,22,13,51,23,43]

// let array = [5, 7, 8, 6, 25, 18, 19, 27, 33, 88, 754, 484, 374, 987, 8765, 7645, 8994, 6548, 932157, 48327, 9875432];
// let result = []
// array.map(num => {
//     const numStr = num.toString();
//     let oddCount = 0;
//     let evenCount = 0;

//     for (let i = 0; i < numStr.length; i++) {
//       const digit = parseInt(numStr[i]);
//       if (digit % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     }
//   result.push(oddCount.toString() + evenCount.toString())
// });
// console.log(result);

// 6.let a=3;
//   let array1 = [0,1,2,3,4,5,6,7,8,9];
//   output = [[0,1,2], [3,4,5], [6,7,8], [9]]

//   let b =5;
//   output = [[0,1,2, 3,4],[5, 6,7,8,9]]

//6 1st question

// let a = 3;
// let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let output = [];

// for (let i = 0; i < array1.length; i += a) {
//     output.push(array1.slice(i, i + a));
// }

// console.log(output);

//6 2nd question

// let b = 5;
// let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let output = [];

// for (let i = 0; i < array1.length; i += b) {
//     let endIndex = i + b;
//     if (endIndex > array1.length) {
//     endIndex = array1.length;
// }
// output.push(array1.slice(i, endIndex));
// }

// console.log(output);

// 7.Combination Sum

// Objective: Given an array of distinct integers and a target number, find all unique combinations of integers that sum up to the target.
// [2, 3, 6, 7]
// // Output: [[7], [2, 2, 3]]

// Number of Islands
// Objective: Given a grid of '1's (land) and '0's (water), count the number of islands.

// console.log(numIslands([
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","0","0"]
// ]));
// //Output: 1

// 8.work on  this task
// for the given array Remove any negative numbers from the array,
// Double each remaining number,
// Check if every number is even after the transformation,
// Return the sum of the transformed numbers if all are even, otherwise return null.

// Input:- let numbers = [12, -7, 5, 8, -10, 20];
// Expected Output: 90

// let numbers = [12, -7, 5, 8, -10, 20]; //given
// let positive = numbers.filter(num => num >= 0);
// console.log(positive)
// let doubled = positive.map(num => num * 2);
// console.log(doubled)
// let Even = doubled.every(num => num % 2 === 0);
// console.log(Even);

// let total = 0;

// for (let i = 0; i < doubled.length; i++) {
//     total += doubled[i];
// }
// console.log(total);

// 9.Taking For loop for 1 to 50 We have to count the total number of 0's,1's,2's,3's,4's,5's,6's,7's,8's,9's

// let count = {
//     "0":0 ,
//     "1":0 ,
//     "2":0 ,
//     "3":0 ,
//     "4":0 ,
//     "5":0 ,
//     "6":0 ,
//     "7":0 ,
//     "8":0 ,
//     "9":0

// } // created a array of 10 numbers thats is initialing with number 0

// for (let i = 1; i <= 50; i++) {  // iteration over range of 1 to 50
//     let str = i.toString();       //convert the iterated i to str
//     for (let j = 0; j < str.length; j++) {  //nested loop zero to length
//         let digit = parseInt(str[j]);       // create new var* assign str-i* then indexing to j index and convert to int
//         count[digit]++;                      // compound + to count array
//     }
// }

// console.log(count);

// 10.Taking One Array And follow the rules
// =>if it is one digits we can add 0
// =>if it is consists 2 digits we can swap
// =>if it is 3 or more digits we can swap upto the digits and the last digit may constant.

// Input:-[8,59,738,9645,87657,123456789]
// Output:-[80, 95, 378, 4695, 56787, 876543219]

// let arrayInput = [8,59,738,9645,87657,123456789]
// let resultArray = []

// arrayInput.map((data , index) => {
//     if (data.toString().split("").length === 1){
//         resultArray.push(parseInt(data * 10))
//     }
//     else if (data.toString().split("").length === 2){
//         resultArray.push(parseInt(data.toString().split("").reverse().join("")))
//     }
//     else {
//         let arrayData = data.toString().split("")
//         let popElement = arrayData.pop()
//         resultArray.push(parseInt(arrayData.reverse().join("")) + popElement)

//     }
// })
// console.log(resultArray)

// 11.Taking One Array and follows the some rules
// 1=>if the array has single digit consecutive s one is even and one is odd then we can add
//  those numbers other wise the first number will be same
// 2=>if the array has two digits in that one is even and one is odd the we can add otherwise
//    same number will return
// 3=>if the array consists 3 or more digits the first and last digits have one is even and
//    one is odd then we can add those numbers and remain number will append to it.

// Input:-[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876]

// Output:-[9,7,9,774,983,5,13,17,46,9,9,11,17,9,33,743,118,7674,7,11,9,5,2,138787]

//let array = [2, 7, 9, 6741, 983, 23, 67, 89, 46, 27, 6, 3, 8, 9, 33, 2435, 982, 56742, 5, 2, 9, 3, 2, 787876]

// let a = [2, 7, 9, 6741, 983, 23, 67, 89, 46, 27, 6, 3, 8, 9, 33, 2435, 982, 56742, 5, 2, 9, 3, 2, 787876];
// let b = [];
// let c = a.length;
// a.map((i, x) => {
//     let sp = i.toString().split("");
//     let ch = "";
//     let str = i.toString();
//     let len = str.length;
//     if (len === 1) {
//         if (x + 1 < a.length) {
//             if ((a[x] % 2 == 0) && (a[x + 1] % 2 == 0) || (a[x] % 2 == 1) && (a[x + 1] % 2 == 1)) {
//                 b.push(a[x]);
//             }
//             else {
//                 b.push(a[x] + a[x + 1]);
//             }
//         }
//     }
//     if (sp.length == 2) {
//         if ((parseInt(sp[0]) % 2 == 0) && (parseInt(sp[sp.length - 1]) % 2 == 1)) {
//             let f = parseInt(sp.slice(0));
//             let l = parseInt(sp[sp.length - 1])
//             let sum = f + l;
//             ch = parseInt(sum.toString());
//             b.push(ch);
//         }
//         else if ((parseInt(sp[0]) % 2 == 1) && (parseInt(sp[sp.length - 1]) % 2 == 0)) {
//             let f = parseInt(sp.slice(0));
//             let l = parseInt(sp[sp.length - 1])
//             let sum = f + l;
//             ch = parseInt(sum.toString());
//             b.push(ch);
//         }
//         else {
//             b.push(parseInt(sp.join('')));
//         }
//     }
//     if (sp.length >= 3) {
//         if ((parseInt(sp[0]) % 2 == 0) && (parseInt(sp[sp.length - 1]) % 2 == 1)) {
//             let f = parseInt(sp.shift());
//             let l = parseInt(sp.pop());
//             let sum = f + l;
//             ch = parseInt(sum.toString() + sp.join(''));
//             b.push(ch);
//         }
//         else if ((parseInt(sp[0]) % 2 == 1) && (parseInt(sp[sp.length - 1]) % 2 == 0)) {
//             let f = parseInt(sp.shift());
//             let l = parseInt(sp.pop());
//             let sum = f + l;
//             ch = parseInt(sum.toString() + sp.join(''));
//             b.push(ch);
//         }
//         else {
//             b.push(parseInt(sp.join('')));
//         }
//     }
// });
// console.log(b);

//12. Input:-[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876]
// 1=>if the array has single digit consecutive s one is even and one is odd then we can add
//  those numbers other wise the first number will be same
// 2=>if the array has two digits in that one is even and one is odd the we can add otherwise
//    same number will return
// 3=>if the array consists 3 or more digits the first even and last digit odd, have one is even and
//    one is odd then we can add those numbers and remain number will append to it last

// let array = [2, 7, 9, 6741, 983, 23, 67, 89, 46, 27, 6, 3, 8, 9, 33, 2435, 982, 56742, 5, 2, 9, 3, 2, 787876]

// let originalArray = [2, 7, 9, 6741, 983, 23, 67, 89, 46, 27, 6, 3, 8, 9, 33, 2435, 982, 56742, 5, 2, 9, 3, 2, 787876 , 243];
// let resultArray = [];

// originalArray.forEach((data, index) => {
//     let stringArray = data.toString().split("");
//     let ch = "";
//     let string = data.toString();
//     let lengthOfString = string.length;
//     if (lengthOfString === 1) {

//         if ((originalArray[index] % 2 === 0) && (originalArray[index + 1] % 2 === 0) || (originalArray[index] % 2 === 1) && (originalArray[index + 1] % 2 === 1)) {
//             resultArray.push(originalArray[index]);
//         }
//         else {
//             resultArray.push(originalArray[index] + originalArray[index + 1]);
//         }
//     }
//     else if (stringArray.length === 2) {
//         if (((parseInt(stringArray[0]) % 2 === 0) && (parseInt(stringArray[stringArray.length - 1]) % 2 !== 0)) || ((parseInt(stringArray[0]) % 2 === 1) && (parseInt(stringArray[stringArray.length - 1]) % 2 === 0) ) ){

//             let firstNumber = parseInt(stringArray[0]);
//             let lastNumber = parseInt(stringArray[stringArray.length - 1])
//             let sumOfNumbers = firstNumber + lastNumber;
//             ch = parseInt(sumOfNumbers.toString());
//             resultArray.push(ch);
//         }

//         else {
//             resultArray.push(parseInt(stringArray.join('')));
//         }
//     }

//     else {
//         let remainString = "";
//         if (stringArray.length % 2 === 0) {
//             while (stringArray.length > 0) {
//                 let firstNumber = parseInt(stringArray.shift());
//                 let lastNumber = parseInt(stringArray.pop());
//                 if ((firstNumber % 2 === 0) && (lastNumber % 2 === 1) || (firstNumber % 2 === 1) && (lastNumber % 2 === 0)) {
//                     let sumOfNumbers = firstNumber + lastNumber;
//                     ch += sumOfNumbers.toString();
//                 }
//                 else {
//                     remainString = firstNumber.toString() + lastNumber.toString() + stringArray.join('');

//                 }
//             }
//         }
//         else {
//             while (stringArray.length > 1) {
//                 if (stringArray.length % 2 !== 0) {
//                     let firstNumber = parseInt(stringArray.shift());
//                     let lastNumber = parseInt(stringArray.pop())
//                     if ((firstNumber % 2 === 0) && (lastNumber % 2 === 1) || (firstNumber % 2 === 1) && (lastNumber % 2 === 0)) {
//                         let sumOfNumbers = firstNumber + lastNumber;
//                         ch += sumOfNumbers.toString() + stringArray[0];

//                     }
//                     else {
//                         remainString = firstNumber.toString() + stringArray.join('') + lastNumber.toString();
//                     }
//                 }
//                 else {
//                     let firstNumber = parseInt(stringArray.shift());
//                     let lastNumber = parseInt(stringArray.pop());
//                     if ((firstNumber % 2 === 0) && (lastNumber % 2 === 1) || (firstNumber % 2 === 1) && (lastNumber % 2 === 0)) {
//                         let sumOfNumbers = firstNumber + lastNumber;
//                         ch += sumOfNumbers.toString();
//                         console.log(ch);

//                     }
//                     else {
//                         remainString = firstNumber.toString() + stringArray.join('') + lastNumber.toString();
//                     }
//                 }
//             }
//         }
//         resultArray.push(parseInt(ch + remainString));
//     }
// });
// console.log(resultArray);

//const xmas95 = new Date("1997-12-27  ");
//console.log(xmas95);
