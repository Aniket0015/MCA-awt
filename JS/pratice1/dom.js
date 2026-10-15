let arr = [];

 function add_tr(e)  {
   

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let course = document.getElementById("course");
    let table = document.getElementById("table");

    if (name.value === "" ||email.value === "" ||password.value === "" ||course.value === "") {
        alert("fill");
        return;
    }

    let obj = {
        name: name.value,
        email: email.value,
        password: password.value,
        course: course.value
    };

    name.value = "";
    email.value = "";
    password.value = "";
    course.value = "";

    arr.push(obj);

    document.getElementById("count").innerHTML = arr.length;

    table.appendChild(rowMaker(obj, arr.length - 1));
}


function rowMaker(obj, i) {
    let tr = document.createElement("tr");
    tr.classList = "tr-table";

    for (const key in obj) {
        if (key == "password") continue;

        tr.appendChild(tdMaker(obj[key]));
    }
  
    let td = document.createElement("td");

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";

  
    btn.onclick = function () {
        d_D(i, tr);
    };

  
    let btn2 = document.createElement("button");
    btn2.innerHTML = "edit";

  
    btn2.onclick = function (e) {
        edit(i);
    }; 
    td.appendChild(btn);
     td.appendChild(btn2);
    tr.appendChild(td);

    return tr;
}


function tdMaker(data) {
    let td = document.createElement("td");
    td.innerHTML = data;
    return td;
}


function d_D(index) {
    
    arr.splice(index, 1);

   
    makeT(arr);

  
    document.getElementById("count").innerHTML = String(arr.length);
}


function search_n(e){
   let value = e.target.value.toLowerCase();

    let arr2 = arr.filter(obj =>
        obj.name.toLowerCase().includes(value)
    );

    makeT(arr2);
}

function makeT(data ) {
    let table = document.getElementById("table");
    table.innerHTML = "";

    let tr = document.createElement("tr");

    ["Name", "Email", "Course", "Action"].forEach(t => {
        let th = document.createElement("th");
        th.innerHTML = t;
        tr.appendChild(th);
    });

    table.appendChild(tr);

    data.forEach((obj) => {
        let i = arr.indexOf(obj);
        table.appendChild(rowMaker(obj, i));
    });
}
function edit(i){
   let obj = arr[i];

    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
    document.getElementById("password").value = obj.password;
    document.getElementById("course").value = obj.course;

    arr.splice(i, 1);

    document.getElementById("count").innerHTML = arr.length;

    makeT(arr);
}


