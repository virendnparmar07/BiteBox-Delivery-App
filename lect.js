// let fact=1;
//         for(let i=1;i<=10;i++) {
//             fact=fact*i;
//         }
//         console.log(fact);

const { useLayoutEffect } = require("react");

//multiplicationn of table
// let n = parseInt(prompt("Enter the number: "))
// for(let i=1;i<=10;i++) {
//     console.log(`${n} x ${i} = ${n*i}`)
// }

//count the number of digit

// let n = parseInt(prompt("Enter a number: "))
// let i = 0;
// while(n>0) {
//     i++;
//     n=Math.floor(n/10);

// }
// if(i === 1){
//     console.log("units");
// } else if(i === 2) {
//     console.log("tens" + "-" + i);
// } else if(i === 3) {
//     console.log("hundreds" + "-" + i);
// } else if(i === 4){
//     console.log("thousands" + "-" + i);
// } else {
//     console.log("Bigger number" + "-" + i)
// }


//prime number using while loop
// let i=2;
// let n=parseInt(prompt("Enter the number: "))
// let isprime=true;

// if(n <= 1) {
//     isprime=false;
// }else {
//     while (i < n) {
//         if(n%i == 0) {
//             isprime = false;
//             break;  
//         }
//         i++;
//     }
// }

// if(isprime){
//     console.log("Prime number");
// } else {
//     console.log("Not a Prime number");
// }

//palindrome

// let n = parseInt(prompt("Enter your number to check for plaindrome"));
// let original = n;
// let rev=0;

// while(n>0) {
//     rem = n%10;
//     rev = rev*10+rem;
//     n=Math.floor(n/10);
// }

// if(rev===original) {
//     console.log(`${original} is Palindrome`);
// } else {
//     console.log(`${original} is not a Palindrome`);
// }



//function with default parameter 


// function add(a=20,b=30,c=40) {
//     console.log(a+b+c);
// }
// add();

//timeout

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

//arrow function

// let show = (a,b) => {
//     console.log(a+b);
// }
// show(10,20);

// let show=(a=10, b, c=40) => {console.log(a+b+c)};
// show(20, 25, 30);

