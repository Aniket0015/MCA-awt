function sign() {
  let name = document.getElementById("name");
  let authText = document.getElementById("auth-div-p");
  let buttons = document.getElementsByClassName("action-button-button");

  let p = document.getElementById("auth-div-p");
  p.setAttribute("active-status", "sign");
  name.style.display = "block";
  authText.innerText = "Sign up";

  buttons[0].classList.add("active");
  buttons[1].classList.remove("active");
}

function login() {
  let name = document.getElementById("name");
  let authText = document.getElementById("auth-div-p");
  let buttons = document.getElementsByClassName("action-button-button");
  let p = document.getElementById("auth-div-p");
  p.setAttribute("active-status", "login");
  name.style.display = "none";

  authText.innerText = "Login";
  buttons[1].classList.add("active");
  buttons[0].classList.remove("active");
}

async function getD() {
  let res = await fetch("http://localhost:3000/user");
  let arr = await res.json();
  return arr;
}


async function onsubmitU() {
  let p = document.getElementById("auth-div-p");
  let pageState = p.getAttribute("active-status");

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (pageState === "sign") {
    if (email.value === "" || name.value === "" || password.value === "") {
      alert("Fill form");
      return;
    }

    let arr = await getD();

    let checked = arr.find((ele) => {
      return ele.email === email.value;
    });

    if (checked) {
      alert("User already exists");
      return;
    }

    let newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    let res = await fetch("http://localhost:3000/user", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newUser),
    });

    if (res.ok) {
      alert("Sign up successful");

      name.value = "";
      email.value = "";
      password.value = "";
    }
  } else {
    if (email.value === "" || password.value === "") {
      alert("Fill form");
      return;
    }

    let arr = await getD();
console.log(arr)
    let user = arr.find((ele) => {
      return ele.email === email.value && ele.password === password.value;
    });

    if (user) {
      alert("Login successful");
    } else {
      alert("Invalid email or password");
      return ;
    }
    email.value = "";
      password.value = "";
      navigation.navigate("./dashBoard.html")
      console.log(user)
      localStorage.setItem("user",JSON.stringify({name:user.name}))
  }
}
