let name = document.getElementById("name");
let price = document.getElementById("price");
let qty = document.getElementById("qty");
let category = document.getElementById("category");
let btn = document.getElementById("btn");
let cartBtn = document.createElement("button");
let arr = [];
let cart = [];
btn.onclick = (e) => {
  let nameValue = name.value;
  let priceValue = price.value;
  let qtyValue = qty.value;
  let categoryValue = category.value;
  if (
    nameValue === "" ||
    priceValue === "" ||
    qtyValue === "" ||
    categoryValue == ""
  ) {
    alert("fill form");
    return;
  }
  let table = document.getElementById("table");
  let obj = {
    name: nameValue,
    price: priceValue,
    qty: qtyValue,
    category: categoryValue,
  };
  name.value = "";
  price.value = "";
  qty.value = "";
  category.value = "";
  arr.push(obj);
  document.getElementById("count").innerHTML = "count: " + arr.length;
  let row = rowMaker(obj, arr.length - 1);

  table.appendChild(row);
};
document.getElementById("search").oninput = () => {
  let value = document.getElementById("search").value.toLowerCase().trim();
  if (value === "") {
    makeT(arr);
    return;
  }
  let arr2 = arr.filter((obj) => obj.name.toLowerCase().includes(value));

  makeT(arr2);
};

function rowMaker(obj, i) {
  let tr = document.createElement("tr");
  tr.classList = "tr-table";

  for (const key in obj) {
    tr.appendChild(tdMaker(obj[key]));
  }

  let td = document.createElement("td");

  let btn = document.createElement("button");
  btn.innerHTML = "Delete";

  btn.onclick = function () {
    d_D(i, tr);
  };

  let btn2 = document.createElement("button");
  btn2.innerHTML = "Edit";

  btn2.onclick = function () {
    edit(i);
  };
  let cartBtn = document.createElement("button");
  cartBtn.innerHTML = "Add to Cart";

  cartBtn.onclick = function () {
    addToCart(obj);
  };

  td.appendChild(cartBtn);
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

function makeT(data) {
  let table = document.getElementById("table");
  table.innerHTML = "";

  let tr = document.createElement("tr");

  ["Name", "price", "Quantity", "Category"].forEach((t) => {
    let th = document.createElement("th");
    th.innerHTML = t;
    tr.appendChild(th);
  });

  table.appendChild(tr);

  data.forEach((obj) => {
    let i = arr.indexOf(obj);
    table.appendChild(rowMaker(obj, i));
  });
  document.getElementById("count").innerHTML = "count: " + arr.length;
}
function edit(i) {
  let obj = arr[i];

  name.value = obj.name;
  price.value = obj.price;
  qty.value = obj.qty;
  category.value = obj.category;

  arr.splice(i, 1);

  makeT(arr);
}


function addToCart(obj){
  
  
    cart.push(obj);
    console.log(cart)
    draw_c() 
}


function c_tr(obj){
    let tr = document.createElement("tr");
        for( let key in obj){
          if(key=="category"){
            continue;
          }
         let td =tdMaker(obj[key]);
         tr.appendChild(td);
        }
        let t =String(Number(obj.price)*Number(obj.qty));
        console.log(t)
        let td = tdMaker(t);
        tr.appendChild(td);
        console.log(obj)
          return tr;
}
function draw_c(){
  let cart_t = document.getElementById("cart-table");
  cart_t.innerHTML=` <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
    </tr>`

    cart.forEach((obj)=>{
      let tr_c =c_tr(obj);
      cart_t.appendChild(tr_c);
    })
}

