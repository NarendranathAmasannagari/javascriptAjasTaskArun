
// Task for TCT batch for today(05-09-2024),

// --> 1 Exponentiation:
// ---------------
// 1.How do you find the square of 4 using Exponentiation?
// console.log(4 ** 2 )
// 2.What is 2 ** -2? what will be the output?
// console.log(2 ** -2) //0.25
// 3.What is (-2) ** 3?
// console.log((-2) ** 3) //-8
// 4.What is 8 ** (1/3)?
// console.log(8 ** (1/3)) //2
// 5.What is 1.5 ** 2?
// console.log(1.5 ** 2) //2.25
// 6.Write more examples using exponent similar to above questions?
// console.log(3 ** 4); // Output: 81 (3 raised to the power of 4)
// console.log(10 ** -1); // Output: 0.1 (10 raised to the power of -1)
// console.log((-3) ** 2); // Output: 9 (-3 squared)
// console.log(16 ** (1/4)); // Output: 2 (16 raised to the power of 1/4, or the fourth root of 16)
// console.log(2.5 ** 3); // Output: 15.625 (2.5 cubed)
//----------------------------------------------------------
 
// --> Logical operator:
// -----------------
// 1.write a code using the logical operators AND (&&) and OR (||) with all possible combinations of true and false values.
 
// example:
// console.log(true && true)
 
// AND (&&) operator
// console.log(true && true);   // Output: true
// console.log(true && false);  // Output: false
// console.log(false && true);  // Output: false
// console.log(false && false); // Output: false

// OR (||) operator
// console.log(true || true);   // Output: true
// console.log(true || false);  // Output: true
// console.log(false || true);  // Output: true
// console.log(false || false); // Output: false

// Combining AND and OR operators
// console.log(true && true || false);  // Output: true
// console.log(true && false || true); // Output: true
// console.log(false && true || false); // Output: false
// console.log(false && false || true); // Output: true
// console.log(true || false && false); // Output: true
// console.log(false || true && false); // Output: false
// console.log(true || false && true);  // Output: true
// console.log(false || false && false); // Output: false

//--> 3 comparison operator:
// --------------------
// 1. write a code using the all comparison operators (==,===,!=,!==,<=,>=,<,>)?
// example: 
// let a=2
// let b=4
// console.log(a+2>b-2)
 
// Declare variables
// let a = 2;
// let b = 4;
// let c = "2";
// let d = 2;

// Equal to (==)
// console.log(a == b); // Output: false
// console.log(a == c); // Output: true (because of type coercion)

// Strictly equal to (===)
// console.log(a === b); // Output: false
// console.log(a === c); // Output: false (because of type mismatch)
// console.log(a === d); // Output: true

// Not equal to (!=)
// console.log(a != b); // Output: true
// console.log(a != c); // Output: false (because of type coercion)

// Strictly not equal to (!==)
// console.log(a !== b); // Output: true
// console.log(a !== c); // Output: true (because of type mismatch)
// console.log(a !== d); // Output: false

// Less than or equal to (<=)
// console.log(a <= b); // Output: true
// console.log(b <= a); // Output: false

// Greater than or equal to (>=)
// console.log(a >= b); // Output: false
// console.log(b >= a); // Output: true

// Less than (<)
// console.log(a < b); // Output: true
// console.log(b < a); // Output: false

// Greater than (>)
// console.log(a > b); // Output: false
// console.log(b > a); // Output: true

// Example usage
// console.log(a + 2 > b - 2); // Output: false
// console.log(a * 2 < b * 2); // Output: true
// console.log(a === d && b > a); // Output: true

// shared by Arunteja
 
 
 
// Fallowing are Java Script tasks on loops and conditional statements,
 
// 06/September/2024
 
// if statements
// -------------
// 1.Write a program that checks if a number is positive, negative, or zero.

// let num = 7 

// function checkNumber(num) {
//     if (num > 0) {
//       console.log(`${num} is a positive number.`);
//     } else if (num < 0) {
//       console.log(`${num} is a negative number.`);
//     } else {
//       console.log(`${num} is zero.`);
//     }
//   }
  
//   // Test the function
//   checkNumber(5);  // Output: 5 is a positive number.
//   checkNumber(-3); // Output: -3 is a negative number.
//   checkNumber(0);  // Output: 0 is zero.

// 2.Write a program that assigns a grade (A, B, C, D, F) based on a score using nested if.

// function assignGrade(score) {
//     if (score >= 90) {
//       console.log(`Grade: A`);
//     } else if (score >= 80) {
//       console.log(`Grade: B`);
//     } else if (score >= 70) {
//       console.log(`Grade: C`);
//     } else if (score >= 60) {
//       console.log(`Grade: D`);
//     } else {
//       console.log(`Grade: F`);
//     }
//   }
  
//   // Test the function
//   assignGrade(95);  // Output: Grade: A
//   assignGrade(75);  // Output: Grade: C
//   assignGrade(40);  // Output: Grade: F
//   assignGrade(88);  // Output: Grade: B

// 3.Develop a program that determines if a number is even or odd and whether it is within a certain range (1 to 100)

// function checkNumber(num) {
//     if (num < 1 || num > 100) {
//       console.log(`Number ${num} is out of range (1-100).`);
//     } 
//     else {
//       if (num % 2 === 0) {
//         console.log(`Number ${num} is even.`);
//       } 
//       else {
//         console.log(`Number ${num} is odd.`);
//       }
//       console.log(`Number ${num} is within the range (1-100).`);
//     }
//   }
  
//   // Test the function
//   checkNumber(25);  // Output: Number 25 is odd. Number 25 is within the range (1-100).
//   checkNumber(50);  // Output: Number 50 is even. Number 50 is within the range (1-100).
//   checkNumber(150); // Output: Number 150 is out of range (1-100).

// 4.Write a program that checks if a person is eligible to vote based on their age and citizenship status using nested if.

// function checkVotingEligibility(age, citizenship) {
//     if (age >= 18) {
//       if (citizenship === "yes") {
//         console.log("You are eligible to vote.");
//       } 
//       else {
//         console.log("You are not a citizen, therefore you are not eligible to vote.");
//       }
//     } else {
//       console.log("You are not old enough to vote.");
//     }
//   }
  
//   // Test the function
//   checkVotingEligibility(25, "yes");  // Output: You are eligible to vote.
//   checkVotingEligibility(17, "yes");  // Output: You are not old enough to vote.
//   checkVotingEligibility(30, "no");  // Output: You are not a citizen, therefore you are not eligible to vote.

// 5.Write a program that determines if a character is a vowel or consonant?

// function checkChar(char){
//     ch  = char.toLowerCase(); 
//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//     return console.log("Given character is a Vowel");
//     return console.log("Given character is a Consonent");
// }


// checkChar('E');
// checkChar('Z')


// for loop:

// ---------
// 1.Write a for loop to compute the sum of all integers from 1 to 50.

// let sum = 0 
// for (let i = 1 ; i <= 50 ; i ++){
//     sum += i
// }
// console.log(sum);

// 2.Write a for loop that prints the first 10 multiples of a given number n?

// let n = 2 
// for(let i = 1 ; i <= 10 ; i ++){
//     console.log(n * i)
// }

// 3.Write a for loop to print all prime numbers between 1 and 100.


// m=int(input())
// n=int(input())
// for i in range(m,n+1):
//     c=0
//     for j in range(2,i):
//         if i%j==0:
//             c=c+1 
//     if c==0:
//         print(i)

// let startingNumber = 2 
// let endingNumber = 100 

// for (let i = startingNumber ; i <= endingNumber ; i++ ){
//     let count = 0 
//     for (let j = 2 ; j < i ; j++){
//         if (i % j === 0){
//             count += 1 
//             break
//         }

//     }
//     if (count === 0 ){
//         console.log(i)
//     }

// }

// 4.Use a for loop to compute the sum of squares of the first 10 positive integers.
// let positiveIntegersStart = 1
// let positiveIntegersEnd = 10 
// let sumOfSquares = 0
// for ( let i = positiveIntegersStart ; i <= positiveIntegersEnd ; i ++) {
//     let sum = (i * i)
//     sumOfSquares += sum 
// }
// console.log(sumOfSquares);

// 5.Write a program that prints the sum of each pair of numbers between 1 and 2 using nested for loop?
 
// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 2; j++) {
//         let sum = i + j;
//         console.log(sum);
//     }
// }

 
// Nested loops:

// ---------------

// 1.Write a program that calculates the sum of all i**j values for i and j ranging from 1 to 3(using exponent).

// let startingNum = 1 
// let endingNum = 3 
// let sum = 0 
// for(let i = 1 ; i <= 3 ; i ++){
//     for (let j = 1 ; j<= 3 ; j ++ ){
//         sum += i ** j 
//     } 
    
// }

// console.log(sum);

// 3.Write a program that prints all pairs (i, j) between 1 and 5 where the difference between i and j is 2.


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i - j === 2 || j - i === 2) {
//             console.log(`(${i}, ${j})`);
//         }
//     }
// }


// 4.Write a program where the outer loop runs from 5 to 1, and the inner loop runs from 1 to 3, printing each pair (i, j).

// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`(${i}, ${j})`);
//     }
// }

// 5.Write a program that finds pairs of numbers (i, j) between 1 and 5 where both numbers are prime.

// Function to check if a number is prime
// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i * i <= n; i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
  
//   // Find pairs of prime numbers between 1 and 5
//   for (let i = 2; i <= 5; i++) {
//     for (let j = 2; j <= 5; j++) {
//       if (isPrime(i) && isPrime(j)) {
//         console.log(`Pair found: (${i}, ${j})`);
//       }
//     }
//   }

// 6.Write a program that checks and prints when i is equal to or greater than j in nested loop running from 1 to 5 range.

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (i >= j) {
//         console.log(`i (${i}) is greater than or equal to j (${j})`);
//       }
//     }
//   }

// 7.Write a program that counts the total number of iterations performed in nested loops ,
//where the outer loop runs from 1 to 3 and the inner loop runs from 1 to 2.

// let iterationCount = 0;

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     iterationCount++;
//     console.log(`Iteration ${iterationCount}: i = ${i}, j = ${j}`);
//   }
// }

// console.log(`Total iterations: ${iterationCount}`);

// 8.Write a program that checks if the sum of pairs (i, j) between 1 and 4 is a prime number.

// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i * i <= n; i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
  
//   for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 4; j++) {
//       let sum = i + j;
//       if (isPrime(sum)) {
//         console.log(`The sum of (${i}, ${j}) is a prime number: ${sum}`);
//       }
//     }
//   }

// 9.Write a program that finds pairs (i, j) from 1 to 3 where the sum i + j is greater than the product i * j.

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       if (i + j > i * j) {
//         console.log(`The pair (${i}, ${j}) satisfies the condition: ${i} + ${j} > ${i} * ${j}`);
//       }
//     }
//   }

// 10.Write a program that prints pairs (i, j) from 1 to 3 where the product i * j is even.

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       if ((i * j) % 2 === 0) {
//         console.log(`The pair (${i}, ${j}) has an even product: ${i} * ${j} = ${i * j}`);
//       }
//     }
//   }

