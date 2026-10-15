

 function  putd(){
   fetch("http://localhost:3000/employees",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
        e_id:4,
        name:"ash",
        salary:12000
    })
   })
  
    
}

 function  deld(){
   fetch(`http://localhost:3000/employees?e_id=${4}`,{
    method:"DELETE",
   
   })
  
    
}

 function  getd(){
   fetch("http://localhost:3000/employees",
   
    
    
   ).then(res => res.json())
   .then(data=>{
    console.log(data)
   })
  
    
}

function patchd(){
   fetch(`http://localhost:3000/employees/zd_LkM0Unro`,{
      method:"PATCH",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
         salary:18000
      })
   })
}
patchd()