// let str  = "hello world";

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// let arr = str.split(" ")
// console.log(arr)
// arr= arr.join(" ")
// console.log(arr)

// arr =str.slice(1,6)
// console.log(arr)
// console.log(arr.indexOf("l"));
// arr = str.substring(5,11)
// console.log(arr)
// arr = arr.trim();
// console.log(arr)

// arr =arr.replace("w","h")
// console.log(arr)
// console.log(arr.charAt(3))

// let str= "I am Sorry";

// str = str.split(" ");
// console.log(str);

// for(let i =0 ;i<str.length;i++){
//     let s = str[i].split("");
//     let k = 0;
//     let l =s.length-1;
//     while(k<l){
//         let temp = s[k];
//         s[k]=s[l];
//         s[l]=temp;
//         k++;
//         l--;
//     }
//     str[i] =s.join("");
// }

// str= str.join(" ");
// console.log(str);

// let str = "programming";
// let flag = false;
// for( let i=0;i<str.length;i++){
//         for(let j=0;j<str.length;j++){
//                 if( str.charAt(i)==str.charAt(j) &&  i!=j){
//                     console.log(str.charAt(i))
//                         flag=true
//                     break;
//                 }
//         }
//         if(flag) break;
    
// }

// let str = "programming";
// str = str.split("");
// let vowel="";
// let c="";
// for(let i=0;i<str.length;i++){
//    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i]== "o" ||  str[i]=="u"){
//     vowel+=str[i];
//    }else{
//     c+=str[i];
//    }
// }

// console.log("vowel "+vowel)
// console.log("consonant "+c)


// let str= "I am Sorry";

// str = str.split(" ");
// console.log(str);

// let short=str[0];
// let long = str[0];

// for(let i =1;i<str.length;i++){
//    if(str[i].length>long.length){
//     long = str[i];
//    }
//    if(str[i].length<short.length){
//     short = str[i];
//    }
    
// }
// console.log("longs word : "+long+" length : "+long.length);
// console.log("shorts word : "+short+" length :"+short.length);


// let str1 ="listen"
// let str2= "silent"
// str1=str1.split("");
// str2=str2.split("");
// let arr =[]
// for(let i=0;i<256;i++){
//     arr.push(0);
// }

// for(let x of str1){
//     arr[x.charCodeAt(0)]++;
// }
// for(let x of str2){
//     arr[x.charCodeAt(0)]--;
// }
// let flag=true;
// for(let i=0;i<256;i++){
//     if(arr[i]!=0){
//         flag=false;
//         break;
//     }
// }
// if(flag){
//     console.log("it anagram");
// }else{
//     console.log("not ")
// }


// let arr = prompt().split("");
// for(let i=0;i<arr.length;i++){

//     for(let j=i+1;j<arr.length;j++){
         
//            if(arr[i]==arr[j]){
//             arr.splice(j,1);
//             j--;
//           }
//     }
// }
// str = arr.join("");
// console.log(str)

// let str = prompt();
// for(let i=0;i<arr.length;i++){
// let c =1;
//     for(let j=i+1;j<arr.length;j++){
         
//            if(arr[i]==arr[j]){
//             arr.splice(j,1);
//             j--;
//             c++;
//           }
//     }
//     if(c>1){
//      arr[i]=String(c);   
//     }
// }
// str = arr.join("");
// console.log(str)

// str ="";
// for(let i=0;i<arr.length;i++){
//      if(arr[i].charCodeAt()>="0".charCodeAt() && arr[i].charCodeAt()<="9".charCodeAt()){
//         if(i!=0 ){
//                 let s = arr[i-1];
//                 let times = Number(arr[i].charAt(0));
//                 while(times--){
//                     str+=s;
//                 }
//         }
//      }
// }

// console.log(str);
let str = prompt();

let l = "";

for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let w = str.slice(i, j + 1);

      if (w === w.split("").reverse().join("")) {
        if (w.length > l.length) {
          l = w;
        }
      }
    }
  }

console.log( l);
