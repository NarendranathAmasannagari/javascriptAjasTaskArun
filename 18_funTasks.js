// 1. Function to Check if a Number is Even or Odd
// Input::isEvenOrOdd(5)); 
// Output: Odd

// function isEvenOrOdd(n) {
//     if(n % 2 == 0){
//         return "Even"
//     }
//     else {
//         return "Odd"
//     }
// };
// let n = 5
// result = isEvenOrOdd(n)
// console.log(result);


// 2.Function to Find the Maximum Number in an Array
// Input:findMax([3, 5, 1, 8, 2])); 
// Output: 8

// let array1 = [3, 5, 1, 8, 2]

// let = array=(array1)=> {
//     let lengthOfArray = array1.length 
//     let largestNumber = array1[0]
//     for(let i=1 ; i <= lengthOfArray ; i++){
//         if(largestNumber < array1[i]){
//             largestNumber = array1[i]
//         }
//     }
//     return largestNumber;
// }
// let result = array(array1)
// console.log(result);


// let array1 = [3, 5, 1, 8, 2]
// function MaximumNumber(arr){
//     let result = Math.max(...arr)
//     return console.log(result);
// }
// MaximumNumber(array1)


// 3. Function to Reverse a String
// Input:reverseString('hello')); 
// Output: 'olleh'

// let word = "hello";
// let reverseSting =(word)=>{
//     let reverseWord = ""
//     for(let i=0 ; i < word.length ; i++){
//         reverseWord = word[i] + reverseWord;
//     }
//     return console.log(reverseWord);
// }
// reverseSting(word)

// let word = "hello"; 
// function reverseWord(word){
//     return console.log(word.split('').reverse().join(''));
// }
// reverseWord(word)

// 4.Function to Sum All Numbers in an Array
// Input:sumArray([1, 2, 3, 4, 5])); 
// Output: 15

// let numberArray = [1, 2, 3, 4, 5]

// let sumArray =(numberArray)=>{
//     let sum = 0 
//     for(let i = 0 ; i < numberArray.length ; i ++){
//         sum += numberArray[i]
//     }
//     return console.log(sum);   
// }
// sumArray(numberArray)

//learn this :- method
//.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// let numberArray = [1, 2, 3, 4, 5]

// function sumOfArray(numberArray) {
//     return console.log(sum(numberArray));
// };
// sumOfArray(numberArray)

// 5.Function to Count the Number of Vowels in a String
// Input:countVowels('javascript'));
// Output: 3


// let vowels = (givenWord) => {
//     //let vowels = { "a": 0, "e": 0, "i": 0, "o": 0, "u": 0 }
//     let vowels = {}
//     let count = 0 
//             for(let char of givenWord){
//                 if (char == "a" ||char == "e" || char == "i" || char == "o" || char == "u"){
//                     count++
//                 }
//             }
//     return console.log(count);

// }

// let givenWord = "javascript"
// vowels(givenWord)


// 6.Function to Check if a Word is a Palindrome
// Input:isPalindrome('madam'));
// Output: true
// Input:isPalindrome('hello'));
// Output: false

// let word = "madam"

// let result =(word)=>{
//     let reverse = ""
//     for(let i = 0 ; i < word.length ; i++){
//         reverse = word[i] + reverse
//     }
//     if(reverse == word){
//         return console.log(true);
//     }
//     else {
//         return console.log(false);

//     }


// }
// result(word)


// let word = "madam" 
// let result=(word)=>{
//     let reverseWord =  word.split("").reverse("").join("");
//     return  console.log(reverseWord == word);
// };
// result(word)

// 7. Function to Find the Factorial of a Number
// Input:factorial(5));
// Output: 120

// let factorial=(n)=>{
//     let result = 1 
//     for(let i = 1 ; i <= n ; i++){
//         result *= i 
//     }
//     return console.log(result);

// }

// let n = 5 
// factorial(n)


// function factorial(n){
//     if (n <= 1){
//         return 1;
//     }
//     return ( n * factorial(n-1));

// }
// let n = 5
// console.log(factorial(n));

// 8.Function to Find the Smallest Number in an Array
// Input:findMin([4, 2, 8, 1, 5]));
// Output: 1

// let smallestNumber=(given)=>{
//     let smallestNumber = given[0]
//     for(let i = 1 ; i <= given.length ; i++){
//         if (smallestNumber > given[i]){
//             smallestNumber = given[i]
//         }
//     }
//     return console.log(smallestNumber);

// }

// let given = [4, 2, 8, 1, 5] 
// smallestNumber(given)


// function minNumber(given){
//     return console.log(Math.min(...given));
// }
// given = [4, 2, 8, 1, 5]  
// minNumber(given)


// 9.Function to Check if an Array is Sorted
// Input:isSorted([1, 2, 3, 4, 5]));
// Output: trueisSorted([3, 1, 4, 2]));
// Input:isSorted([3, 1, 4, 2]));
// Output: false

//note:- this return true always given.sort((a,b)=> b - a);

// function isSorted(given){
//     let result = given.sort((a,b)=> b - a);
//     if(given == result){
//         return console.log(true);
//     }
//     else {
//         return console.log(false);
//     }
// }

// let given = [1, 2, 3, 4, 5]
// let given2 = [3, 1, 4, 2]
// isSorted(given)


// 10.Function to Get the Intersection of Two Arrays
// Input:getIntersection([1, 2, 3], [2, 3, 4]));
// Output: [2, 3]


// let getIntersection=(array1 , array2)=>{
//     return console.log(array1.filter(data => array2.includes(data)));
// };

// let array1 = [1, 2, 3] 
// let array2 = [2, 3, 4] 
// getIntersection(array1 , array2)


// 11.Function to Count Occurrences of Each Character in a String
// Input:countCharacters('hello'));
// Output: { h: 1, e: 1, l: 2, o: 1 }
//note :- new logic result[char] = (result[char] || 0) + 1; 

// let countCharacters=(word)=> {
//     let result = {}
//     for(let char of word ){
//         result[char] = (result[char] || 0) + 1; 
//     }
//     return console.log(result);

// };

// let word = "hello"
// countCharacters(word)


// 12.Function to Flatten a Nested Array
// Input:flattenArray([1, [2, 3], [4, 5], 6]));
// Output: [1, 2, 3, 4, 5, 6]

// let result=(array)=>{
//     return console.log(array.flat(Infinity));
// };

// let array = [1, [2, 3], [4, 5], 6] 
// result(array)

// 13.Function to Remove Falsy Values from an Array
// Input:removeFalsyValues([0, 1, false, 2, '', 3]));
// Output: [1, 2, 3]

// let result = (array)=>{
//     let arr = []
//     array.map((data)=> {
//         if((typeof(data) == typeof(1)) && data != 0){
//             arr.push(data)
//         }
//     })
//     return console.log(arr);

// };

// let array = [0, 1, false, 2, '', 3]
// result(array)

// 14. Function to Count the Number of Words in a Sentence
// Input:wordCount('This is a sample sentence'));
// Output: 5

// let wordCount=(sentence)=>{
//     return console.log(sentence.split(" ").length);
// };

// let sentence = 'This is a sample sentence'
// wordCount(sentence)

// 15.Function to Calculate the Average of Numbers in an Array
// Input:average([10, 20, 30, 40]));
// Output: 25

//note :- new method to learn reduce((total, num) => total + num, 0);

// let average=(arr)=>{
//     return console.log(arr.reduce((total, num) => total + num, 0)/arr.length);

// };

// let arr = [10, 20, 30, 40]
// average(arr)


//16.Recursive Function to Find Factorial
//Input:factorial(5));
//Output: 120

// let factorial=(n)=>{
//     if(n <= 1){ //base case 
//         return 1 
//     }
//     return (n * factorial(n-1));

// };

// let n = 5 
// console.log(factorial(n));

// 17. Recursive Function to Calculate Fibonacci Series
// Input:fibonacci(6));
// Output: 8

// let fibonacci=(n)=>{
//     if(n<=1){
//         return n 
//     }
//     return fibonacci(n-1) + fibonacci(n - 2)
// };

// let n = 6
// console.log(fibonacci(n));


// 18.Recursive Function to Calculate the Sum of Digits of a Number
// Input:sumOfDigits(1234));
// Output: 10

// let sumOfDigits=(n)=>{
//     let str = n.toString().split("")
//     let intArray = []
//     let sum = 0
//     for(let i in str){
//         intArray[i]= parseInt(str[i]);
//     }
//     //console.log(intArray)

//     for(let i in intArray){
//         sum += intArray[i]
//     }
//     return console.log(sum);

// }

// let n = 1234
// console.log(sumOfDigits(n));



// if (n.length === 0){
//     return 0
// }
// return n[0] + sumOfDigits(n.slice(1))

// let sumOfDigits=(n)=>{
//     n = n.tostring().split("")

// }

// let n = 1234
// sumOfDigits(n)

// 19. Function to Find the Product of All Elements in an Array
// Input:productArray([1, 2, 3, 4]));
// Output: 24


// let  productArr=(givenArray)=>{
//     let product = 1 
//     for(let i in givenArray){
//         product *= givenArray[i]
//     }
//     return console.log(product);

// };

// let givenArray = [1, 2, 3, 4]
// productArr(givenArray)


// let productArr=(givenArray)=> {
//     let product = 1
//     givenArray.map((data)=>{
//         product*=data
//     });
//     return console.log(product);
// };

// let givenArray = [1, 2, 3, 4]
// productArr(givenArray)



// 20.Recursive Function to Calculate Power of a Number
// Input:power(2, 3));
// Output: 8

// function power(n,k) {
//     if(k == 0){
//         return 1
//     }
//     return n * power(n , k - 1)
// }

// let n = 2 
// let k = 3
// console.log(power(n,k));


// 21.function that takes a string with words separated by spaces or underscores and converts it to camelCase.
// const inputString = "hello_world this_is an example";
// Expected Output:
// "helloWorldThisIsAnExample"


// let modifySentence=(sentence)=>{
//     let count = 0 
//     let newArray = ""
//     let result = ""
//     for(let char of sentence){
//         count += 1
//         if (char == "_" || char ==" " ){
//             newArray += sentence[0 , count].toUpperCase()
//             result += sentence[count] + newArray
//         }
//     }
//     console.log(newArray);

// }
// let sentence = "hello_world this_is an example";
// modifySentence(sentence)


// 22.Write a function that takes a string and capitalizes the first letter of each word.
// const inputString = "hello world";
// Expected Output:
// "Hello World"

//let capitalizesFirstLetter=(sentence)=>{

//}



// let capitalizesFirstLetter = (sentence) => {
//     let arr = sentence.split(" ")
//     let result = ""
//     for (let i = 0; i < arr.length; i++) {
//         let eachWord = arr[i]
//         result += eachWord[0].toUpperCase() + eachWord.slice(1, eachWord.length) + " "
//     }
//     return console.log(result);
// }

// let sentence = "hello world";
// capitalizesFirstLetter(sentence)


// 23.Write a function that takes an array and returns an array of duplicates found in the input array.
// const array = [1, 2, 3, 1, 4, 5, 2, 6];
// Expected Output:
// [1, 2]


// let printDuplicates=(array)=>{
//     let result = []
//     for (let i = 0 ; i < array.length ; i++){
//         for(let j = 0 ; j < array.length ; j ++){
//             if(array[i] == array[j]){
//                 result+= array[i]
//                 break
//             }
//         }
//     }
//     return console.log(result);
    
// };

// const array = [1, 2, 3, 1, 4, 5, 2, 6];
// printDuplicates(array);


// 24. Write a function that takes a start and end value and generates an array containing all numbers in that range, inclusive.
// const start = 1;
// const end = 5;
// Expected Output:
// [1, 2, 3, 4, 5]



// let generateArray = (start, end) => {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result[result.length] = i; 
//     }
//     return result; 
// };

// const start = 1;
// const end = 5;
// console.log(generateArray(start, end)); 


// 25.Function to Check if a Number is Prime
// Input:isPrime(11));
// Output: true
// Input:isPrime(4));
// Output: false

// let isPrime=(n)=>{
//     if(n < 2){
//         return false
//     }

//     for(let i = 2 ; i < n ; i ++ ){
//             if (n % i == 0){
//                 return console.log(false);
//             }
//             else {
//                 return console.log(true)
                
//             }
//         }
// };

// let n = 11
// isPrime(n)

//-------------reducer

// let arr = [{name:"ar",age:30},{name:"bar", age:20}]

// let data = arr.reduce((sum , obj)=>{
//     return sum += obj.age 
// },0)
// console.log(data);




