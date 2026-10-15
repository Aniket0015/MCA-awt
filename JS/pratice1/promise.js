// function login(name, next) {
//     setTimeout(() => {
//         console.log("logged in ------> " + name);
//         next();
//     }, 2000);
// }

// function showProducts(products, next) {
//     setTimeout(() => {
//         console.log("fetching Products ------> " + products);
//         next();
//     }, 2000);
// }

// function placeOrder(productId, next) {
//     setTimeout(() => {
//         console.log("Order Placed  ------> " + productId);
//         next();
//     }, 2000);
// }

// function makeAmount(amount,next){
//          setTimeout(() => {
//         console.log("Amount payed  ------> " + amount);
//         next();
//     }, 2000);
// }

// function confirmation(next){
//          setTimeout(() => {
//         console.log("order confirmed ");
//         next();
//     }, 2000);
// }

// login("abc",()=>{
//     return showProducts("eyz",()=>{
//         return placeOrder("x",()=>{
//             return makeAmount(7890,()=>{
//                 return confirmation(()=>{
//                     return;
//                 })
//             })
//         })
//     })
// })


// const  p=new Promise((resolve, reject) => {
//     let s = true;
//     if(s){
//         resolve("runned")
//     }
//     else{
//         reject("failed")
//     }
// })
// p.then((r)=>{
//     console.log(r)
// })
// .catch((e)=>{
//     console.log(e);
// })


// function getG (){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello world");
//         }, 1*1000*10);
//     })
// }

// getG().then((r)=>{
//     console.log(r);
// });




function login(name){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            
 if(name == "abc"){
    res("logged in ---> " + name)
 }
 else{
    rej("network issue ")
 }
        }, 2000);
    })
}
function showProducts(products){
   return new Promise((res,rej)=>{
    setTimeout(()=>{
        if(products){
            res("Show products " + products)
        }
        else{
            rej("fetching of product invalid")
        }
    },2000)
   })

   
}

function placeOrder(productId){
    return new Promise((res,rej)=>{
setTimeout(()=>{
    if(productId){
        res("OrderPlaced")
    }
    else{
        rej("Check Status")
    }
},2000)
    })
}

function makePayment(amount) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (amount) {
                res("amount paid")
            }
            else {
                rej("not paid")
            }
        }, 2000)
    })
}

function confirmation(){
    return new Promise((res,rej)=>{
        let orderConfirmed=true;
        setTimeout(()=>{
            if(orderConfirmed){
                res("Order Confirmed Successfully")
            }
            else{
                rej("Order failed");
            }
        },2000)
    })
}

// login("bcd").then((response)=>{
//     console.log(response)
//     return showProducts("phone");
// }).then((response)=>{
//     console.log(response)
//     return placeOrder(101);
// }).then((response)=>{
//     console.log(response);
//     return makePayment(20000)
// }).then((response=>{
//     console.log(response)
//     return confirmation();
// })).then((response)=>{
//     console.log(response)
//  }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("promise working")
// })
async function Order_Placed() {
    try{
    let response = await login("bcd");
    console.log(response);

    response = await showProducts("phone");
    console.log(response);

    response = await placeOrder(101);
    console.log(response);

    response = await makePayment(20000);
    console.log(response);

    response = await confirmation();
    console.log(response);
    }
    catch(err){
        console.log(err)
    }
    finally {
        console.log("promise working");
    }
}

Order_Placed();
