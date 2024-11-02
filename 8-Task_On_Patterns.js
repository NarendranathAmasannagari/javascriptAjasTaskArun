// questions on pattern using for loop
// --------------------

// 1.Print a solid square of n x n size using *.
// let n=4
// Output:
// ****
// ****
// ****
// ****

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// 2.Print a right-angled triangle of height n.
// let n=5
// output:
// *
// **
// ***
// ****
// *****

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// 3.print an inverted right-angled triangle of height n.
// let n=4;
// output:
// ****
// ***
// **
// *

// let n = 4;

// for (let i = n; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }


// 4. print a centered pyramid pattern with n rows.
// let n=4
// output:
//    *
//   ***
//  *****
// *******

// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     // Print leading spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     // Print '*' characters
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// 5.Print a number triangle pattern of height n.
// let n=4
// output:
// 1
// 12
// 123
// 1234

// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }

// 6.print a triangle pattern of 1s and 0s that alternates between rows.
// let n=4
// output:
// 1
// 0 0
// 1 1 1
// 0 0 0 0

// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     let char = (i % 2 === 0) ? '0' : '1';
//     for (let j = 1; j <= i; j++) {
//         row += char + ' '; 
//     }

//     console.log(row.trim());
// }

// 7.Print an incremental triangle with numbers increasing in each row.
// let n=4
// output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let n = 4;
// let num = 1;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += num + ' ';
//         num++;
//     }
//     console.log(row);
// }













