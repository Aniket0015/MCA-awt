// let arr = [1,2,3,4,5,6,7]

// let i=0;
// let j=arr.length-1;

// while(i<j){
//     let temp =arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }

// console.log(arr);

// let odd=0;
// let even =0;

// for( let x of arr){
//     if(x%2==0){
//         even++;
//     }
//     else{
//         odd++;
//     }
// }

// console.log("odd " +odd);
// console.log("even "+even);


let arr = [[1,2,3],[4,5,6]]

for(let x of arr){
      for( let j of x){
        console.log(j)
      }
}