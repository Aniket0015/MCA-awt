obj={
    num:9,
    name:"aniket",
    id:88
}
const arr=[1,2,3,5,9,]
for(let i=0;i<arr.length;i++){
   console.log(arr[i]);
}
for( o in obj){
    console.log(o,obj[o])
}
for( c of arr){
    console.log(c)
}


let i=0;
let j= arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}

for( c of arr){
    console.log(c)
}





