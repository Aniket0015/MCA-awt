let obj= {
    name:"aniket",
    age:21,
    email:"anb.com",
    marks:98,
   
    fun: function data(){
        console.log(this.name);
    }
}
let marks={
    math:98,
    eng:76,
    hindi:58,
    sst:87,
    account:87
}
let count=0;
for(let x in obj){
    count++;
}

console.log(count);

let min,max;
let str1="",str2="";

for( let x in marks){
    if(max == null && min ==null){
        max =marks[x];
        str1=x;
        str2=x;
        min=marks[x];
        continue;
    }
   if(max<marks[x]){
    max=marks[x];
    str1=x;
   }
   if(min>marks[x]){
    str2=x;
    min=marks[x];
   }
}
console.log(str1+max)
console.log(str2+min)


let sum={
    chair:988,
    table:989,
    beard:900
}
let su=0;
for(let x in sum){
    su+=x;
}
console.log(su);

let re={
    name:"ani",
    class:"f9",
   
    }

    let arr=[]
    for( let x in re){
        console.log(re[x])
        let st =re[x];
        st = String(st)
            re[st]=x;
    
        
        arr.push(x);
    }
    for(let x of arr){
        delete re[x];
    }
    console.log(re);




