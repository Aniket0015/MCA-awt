
let employees = [];
let editId = null;

const API_URL = "http://localhost:3000/employees";

const form = document.getElementById("employee-form");
const search = document.getElementById("search");
const filterDepartment = document.getElementById("filter-department");


async function get_employees() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch employees");
        }

        employees = await response.json();

        update_department();
        make_table_row();

    } catch (error) {
        console.error("GET Error:", error);
        alert("Unable to load employees");
    }
}



form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelectorAll('input[type="text"]')[0].value;
    const department = form.querySelectorAll('input[type="text"]')[1].value;

    const password = form.querySelector('input[type="password"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const salary = Number(form.querySelector('input[type="number"]').value);
    const date = form.querySelector('input[type="date"]').value;
    const gender = form.querySelector('input[name="gender"]:checked')?.value;

    if (!name.trim() || !department.trim() || !gender ||
        !email || !date || !Number.isFinite(salary) || salary < 0) {
        alert("Please enter valid employee details");
        return;
    }

    let obj = {
        name: name,
        gender: gender,
        department: department,
        password: password,
        email: email,
        salary: salary,
        date: date
    };

    const submitBtn = form.querySelector('input[type="submit"]');
    submitBtn.disabled = true;

    try {
        let response;

        if (editId == null) {

            response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });

        } else {

            response = await fetch(`${API_URL}/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
        }

        if (!response.ok) {
            throw new Error("Failed to save employee");
        }

        editId = null;
        form.reset();
        submitBtn.value = "Submit";

        await get_employees();

    } catch (error) {
        console.error("Save Error:", error);
        alert("Unable to save employee");
    } finally {
        submitBtn.disabled = false;
    }
});



function make_table_row() {

    let tableBody = document.getElementById("employee-list");
    tableBody.innerHTML = "";

    employees.forEach((obj) => {

        let name = search.value.toLowerCase();
        let department = filterDepartment.value;

        if (!obj.name.toLowerCase().includes(name)) {
            return;
        }

        if (department != "all" && obj.department != department) {
            return;
        }

        let row = document.createElement("tr");


        const keys = ["name", "gender", "department", "salary", "date"];

        keys.forEach((key) => {
            row.append(make_table_td(obj, key));
        });

        let td = document.createElement("td");

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", () => {
            edit_employee(obj.id);
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", async () => {
            await delete_employee(obj.id);
        });

        td.append(editBtn);
        td.append(deleteBtn);
        row.append(td);

        tableBody.append(row);
    });
}


function make_table_td(obj, key) {
    let td = document.createElement("td");
    td.textContent = obj[key] ?? "";
    return td;
}



search.addEventListener("input", () => {
    make_table_row();
});



filterDepartment.addEventListener("change", () => {
    make_table_row();
});



function update_department() {

    let departments = [];

    employees.forEach((obj) => {
        if (!departments.includes(obj.department)) {
            departments.push(obj.department);
        }
    });

    let selected = filterDepartment.value;
    filterDepartment.innerHTML = "";

    let option = document.createElement("option");
    option.value = "all";
    option.textContent = "All Departments";
    filterDepartment.append(option);

    departments.forEach((dept) => {
        let option = document.createElement("option");
        option.value = dept;
        option.textContent = dept;
        filterDepartment.append(option);
    });

    if (departments.includes(selected)) {
        filterDepartment.value = selected;
    }
}



function edit_employee(id) {

    const obj = employees.find((emp) => emp.id == id);

    if (!obj) {
        return;
    }

    editId = id;

    form.querySelectorAll('input[type="text"]')[0].value = obj.name;
    form.querySelectorAll('input[type="text"]')[1].value = obj.department;

    form.querySelector('input[type="password"]').value = obj.password;
    form.querySelector('input[type="email"]').value = obj.email;
    form.querySelector('input[type="number"]').value = obj.salary;
    form.querySelector('input[type="date"]').value = obj.date;

    let gender = form.querySelectorAll('input[name="gender"]');

    gender.forEach((input) => {
        input.checked = input.value == obj.gender;
    });

    form.querySelector('input[type="submit"]').value = "Update";
}


async function delete_employee(id) {

    if (!confirm("Are you sure you want to delete this employee?")) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete employee");
        }

        if (editId == id) {
            editId = null;
            form.reset();
            form.querySelector('input[type="submit"]').value = "Submit";
        }

        await get_employees();

    } catch (error) {
        console.error("DELETE Error:", error);
        alert("Unable to delete employee");
    }
}


get_employees();
