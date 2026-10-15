let flip = false;
let allBooks = [];

async function getD() {
  let res = await fetch("http://localhost:3000/books");
  return await res.json();
}


let user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("user-name").innerHTML = user.name;
}

const dashboard = document.getElementById("dashboard-container");


function drawCards(books) {
  dashboard.innerHTML = "";

  books.forEach((book) => {
    const card = document.createElement("div");

    card.classList.add("book-card")
    card.setAttribute("onclick", `showBookDetails('${book.id}')`);

    card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">

            <div class="book-info">

                <h3>${book.title}</h3>

                <p>${book.author}</p>

                <p class="price">
                    ${book.price}
                </p>

                <button
                    onclick="addToCart('${book.id}'); event.stopPropagation()"
                >
                    Add to Cart
                </button>

            </div>
        `;

    dashboard.appendChild(card);
  });
}



async function onLoadC() {
  allBooks = await getD();

  drawCards(allBooks);
}

onLoadC();



function searchByName() {
  let search = document.getElementById("search");

  let filterBooks = allBooks.filter((book) => {
    return book.title.toLowerCase().includes(search.value.toLowerCase());
  });

  drawCards(filterBooks);
}



function sortByPrice() {
  flip = !flip;

  let books = [...allBooks];

  books.sort((a, b) => {
    return flip ? a.price - b.price : b.price - a.price;
  });

  drawCards(books);
}



function showBookDetails(id) {
  let book = allBooks.find((book) => {
    return String(book.id) === String(id);
  });

  if (!book) {
    return;
  }

  document.getElementById("popup-image").src = book.image;

  document.getElementById("popup-title").innerHTML = book.title;

  document.getElementById("popup-author").innerHTML = "Author: " + book.author;

  document.getElementById("popup-description").innerHTML =
    book.description || "No description available";

  document.getElementById("popup-price").innerHTML = "Price: " + book.price;

  document
    .getElementById("popup-cart-btn")
    .setAttribute("onclick", `addToCart('${book.id}')`);

  document.getElementById("book-popup").style.display = "flex";
}


function closePopup() {
  document.getElementById("book-popup").style.display = "none";
}



function addToCart(id) {
  let book = allBooks.find((book) => {
    return String(book.id) === String(id);
  });

  if (!book) {
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let alreadyAdded = cart.find((item) => {
    return String(item.id) === String(book.id);
  });

  if (alreadyAdded) {
    alert("Book already added to cart");

    return;
  }

  cart.push(book);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(book.title + " added to cart");
}


function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log(cart);

  if (cart.length === 0) {
    alert("Cart is empty");

    return;
  }

  alert("You have " + cart.length + " books in cart");
}

function openCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";

    document.getElementById("cart-total").innerHTML = "Total: 0";

    document.getElementById("cart-popup").style.display = "flex";

    return;
  }

  cart.forEach((book) => {
    total = total + Number(book.price);

    let item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `
            <img src="${book.image}" alt="${book.title}">

            <div class="cart-item-info">

                <h3>${book.title}</h3>

                <p>${book.author}</p>

                <p>₹${book.price}</p>

                <button onclick="removeFromCart('${book.id}')">Remove</button>

            </div>
        `;

    cartItems.appendChild(item);
  });

  document.getElementById("cart-total").innerHTML = "Total: " + total;

  document.getElementById("cart-popup").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((book) => {
    return String(book.id) !== String(id);
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  openCart();
}

function buyBooks() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  let buyerName = document.getElementById("buyer-name").value;

  let phone = document.getElementById("buyer-phone").value;

  let address = document.getElementById("buyer-address").value;

  let city = document.getElementById("buyer-city").value;

  let pincode = document.getElementById("buyer-pincode").value;

  if (   buyerName === "" || phone === "" ||address === "" || city === "" || pincode === "" ) {
    alert("Please fill complete delivery address");

    return;
  }

  let total = 0;

  cart.forEach((book) => {
    total = total + Number(book.price);
  });

  let order = {
    customerName: buyerName,
    phone: phone,
    address: address,
    city: city,
    pincode: pincode,
    books: cart,
    total: total,
    orderDate: new Date().toLocaleString(),
  };

  console.log(order);

  localStorage.setItem("lastOrder", JSON.stringify(order));

  alert("Order placed successfully!\nTotal: " + total);

  localStorage.removeItem("cart");

  document.getElementById("buyer-name").value = "";
  document.getElementById("buyer-phone").value = "";
  document.getElementById("buyer-address").value = "";
  document.getElementById("buyer-city").value = "";
  document.getElementById("buyer-pincode").value = "";

  closeCart();
}
