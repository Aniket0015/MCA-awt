// const arr = [1,2,3,4,5,6]

// arr.push(7)
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.unshift(0)
// console.log(arr)
// arr.shift()
// console.log(arr)
// let arr2 =arr.slice(1,4);
// console.log(arr2)
// arr.splice(1,2)
// console.log(arr)
// let arr3= arr2.reverse()
// console.log(arr3)
// arr3=arr3.sort();
// console.log(arr3)
// arr.splice(1,0,2,3)
// console.log(arr)

// remove duplicate

// let arr = [1,3,1,5,5,3,6,8,8]

// for(let i=0;i<arr.length;i++){

//     for(let j=0;j<arr.length;j++){
//           if(i==j)continue;
//           else if(arr[i]==arr[j]){
//             arr.splice(j,1);
//             j--;
//           }
//     }
// }

// console.log(arr);
// let max1,max2,max3;
// max1 = arr[0];
// for(let x of arr){
//      max1 = Math.max(max1,x);
// }
// console.log(max1)
// max2=-1;
// for(let x of arr){
//     if(x>max2 && x<max1){
//         max2=x
//     }
// }
// max1=max2=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(max1<arr[i]){
//         max2=max1;
//         max1=arr[i];
//     }else if(max2<arr[i] && arr[i]!= max1){
//         max2=arr[i]
//     }

// }
// console.log(max1)
// console.log(max2)
// max3=arr[0];
// for(let x of arr){
//     if(x>max3 && x<max1 && x<max2){
//         max3=x
//     }
// }
// console.log(max3)

// even print in arr

// let arr2 = [1,3,1,5,5,3,6,8,8]
// let arr3=[]
// for(let i=1;i<arr2.length;i++){
//     if(arr2[i]%2==0){
//         arr.push(arr2[i]);
//     }
// }
// console.log(arr2)

// // count  
//  arr2 = [1,3,1,5,5,3,6,8,8]
// let count=0;
// arr2 = arr2.sort()
// let j=0;
// for(let i=0;i<arr2.length;i++){
//        if(arr2[i]==arr2[j]){
//         count++
//        }
//     if(arr2[j]!=arr2[i] || i+1==arr2.length ){
//         console.log(arr2[j]+" "+count);
//         j=i;
//         count=1;
//        }
    
// }

// merge two array 
let arr = [3,4,8,4,1,0,3,2]
let arr2 = [1,3,1,5,5,3,6,8,8]

arr = arr.sort();
arr2 = arr2.sort();
let arr3=[];
let i=0;
let j=0;
while(i<arr.length && j<arr.length){
    if(arr[i]<arr2[j]){
        arr3.push(arr[i]);
        i++;
    }else{
        arr3.push(arr2[j]);
        j++;
    }
}
 if(i<arr.length){
    while(i<arr.length){
        arr3.push(arr[i]);
        i++;
    }
 }
  if(j<arr2.length){
    while(j<arr2.length){
        arr3.push(arr2[j]);
        j++;
    }
 }


console.log(arr3)
let sum=0;
for(let x of arr3){
    sum+=x;
}
console.log(sum)
