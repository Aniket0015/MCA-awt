// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

// let maximum = -1
// let minimum = 999;
// for(let i=0;i<5;i++){
//     let r = parseInt(Math.random()*100);
//     if(maximum<r)maximum=r;
//     if(minimum>r)minimum=r;
// }
// console.log("max :" +maximum);
// console.log("min :" +minimum);


// Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.
 
// let d = parseInt(process.argv[2]);
// let m = process.argv[3];

// switch(m){
//   case "March":
//     if(d>=20 && d<=31){
//         console.log("true");
       
//     }else{
//        console.log("false");

//     }
//      break;
//     case "April":
//     if(d>=1 && d<=30){
//         console.log("true");
        
//     }else{
//        console.log("false");

//     }
//      break;
//      case "May":
//     if(d>=1 && d<=31){
//         console.log("true");
         
//     }
//      break;
//     case "June":
//     if(d>=1 && d<=20){
//         console.log("true");
        
//     }else{
//        console.log("false");

//     }
//      break;
//     default:
//         console.log("false");
// }

// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

// let year = parseInt(process.argv[2]);

// if((year%4==0 && year%100!=0)  || (year%400==0)){
//  console.log("leap year");
// }else{
//     console.log("not leap year");
// }



// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

// let coin = parseInt(Math.random()*2);
// if(coin){
//     console.log("tail");
// }else{
//     console.log("head");
// }


// Read a single digit number and write the number in word
// let num = parseInt(process.argv[2]);

// switch (num) {
//     case 0:
//         console.log("Zero");
//         break;
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//         console.log("Four");
//         break;
//     case 5:
//         console.log("Five");
//         break;
//     case 6:
//         console.log("Six");
//         break;
//     case 7:
//         console.log("Seven");
//         break;
//     case 8:
//         console.log("Eight");
//         break;
//     case 9:
//         console.log("Nine");
//         break;
//     default:
//         console.log("Invalid Input");
// }


// Read a Number and Display the week day (Sunday, Monday,...)
let day = parseInt(process.argv[2]);

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input");
}


// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
// let num = parseInt(process.argv[2]);

// switch (num) {
//     case 1:
//         console.log("Unit");
//         break;
//     case 10:
//         console.log("Ten");
//         break;
//     case 100:
//         console.log("Hundred");
//         break;
//     case 1000:
//         console.log("Thousand");
//         break;
//     case 10000:
//         console.log("Ten Thousand");
//         break;
//     case 100000:
//         console.log("Lakh");
//         break;
//     default:
//         console.log("Invalid Input");
// }


// Enter 3 Numbers do following arithmetic operation and find the one that

// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let c = parseInt(process.argv[4]);

// let op1 = a + b * c;
// let op2 = a % b + c;
// let op3 = c + a / b;
// let op4 = a * b + c;



// let maximum = Math.max(op1, op2, op3, op4);
// let minimum = Math.min(op1, op2, op3, op4);

// console.log("Maximum Value:", maximum);
// console.log("Minimum Value:", minimum);


