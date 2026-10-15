let employees = {
    name:"aniket",
    e_id:2,
    email:"m@gmail.com"
}
const postd = async (emp)=>{
  let res = await fetch("http://localhost:3000/employee",
    {
        "method":"POST",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(emp)
    }
  )
}

const putd = async ()=>{
    let res = await fetch("http://localhost:3000/employees/Ip7_YnOhHlg",
   { 
    "method":"PUT",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(employees)
   }
    );

}

const getd = async ()=>{
    let res = await fetch("http://localhost:3000/employee");
     if(res.ok){
        let data = await res.json();
        console.log(data);
        return data;
     }
     return []
}
let employee = await getd();
let emp = [];
// console.log(Array.isArray(employee))
 
// let mp = new Map();

// let sum=0;
// let count=0;
// let salary_m= (1<<31);
// console.log(salary_m);
//  for ( let x of employee){
//     if(salary_m==null)
//         salary_m=x.salary;
//     else
//         salary_m =Math.max(salary_m,x.salary);
//         sum+= x.salary;
//         if(mp[x.dept]==null) mp[x.dept]=0;
//         mp[x.dept]+=1;
//     count++;
//     }

//  console.log(sum/count);
//  console.log(salary_m)
//  for( let m in mp){
//     console.log(m +" "+ mp[m])
//  }
// // console.log(JSON.stringify(employees));




let f_data = employee.filter(e => e.salary > 50);

console.log(f_data);

let c = employee.map((e,i)=>  {e.id =String.fromCharCode((Number("a".charCodeAt()+i%"z".charCodeAt())));return e});
console.log(c)

let d = employee.find((e)=>e.name=="r")

console.log(d)

let t =employee.reduce((t,l)=> t+=l.salary , 0)
console.log(t)