// let d ={name:"aniket",age:20};
// let o ={...d, age:40}
// let m  = {...o,...d}
// let {name,...rest}=m
// console.log(name);
// console.log(rest)
const order ={
    id:1,
    name:"aniket",
    qyt:12,
    paymode:"upi",
}
let {id,name,status="pending",...rest} = order;
console.log(id,name,status,rest);
