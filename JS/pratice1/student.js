let url = "http://localhost:3000/";

async function Admin_login(username, password) {
    let res = await fetch(url + "admins");
    if (!res.ok) {
        console.log("error");
        return {
            success: "failed",
        };
    }
    let data = await res.json();

    let valid = data.find(
        (obj) => username === obj.username && password === obj.password,
    );
    if (valid)
        return {
            success: true,
            message: "Admin Login Successful",
            admin: valid,
        };
    else {
        console.log("error");
        return {
            success: "failed",
        };
    }
}

async function Get_Student(id) {
    let res = await fetch(url + "students");
    if (!res.ok) {
        console.log("error");
        return {
            found: false,
        };
    }
    let data = await res.json();
    let valid = data.find((obj) => id === obj.id);
    if (valid) {
        return {
            found: true,
            student: valid,
        };
    } else {
        return {
            found: false,
        };
    }
}

async function getStudent(studentId) {
    const response = await fetch(
        `${url}students/${studentId}`
    );

    if (!response.ok) {
        throw new Error("Student not found");
    }

    const student = await response.json();

    return student;
}
async function Get_Attendance(id) {
    let res = await fetch(url + "attendance");
    if (!res.ok) {
        console.log("error");
        return {
            found: false,
        };
    }
    let data = await res.json();
    let valid = data.find((obj) => id === obj.studentId);
    if (valid) {
        return {
            found: true,
            attendance: valid,
        };
    } else {
        return {
            found: false,
        };
    }
}

async function Get_marks(id) {
    let res = await fetch(url + "marks");
    if (!res.ok) {
        console.log("error");
        return {
            found: false,
        };
    }
    let data = await res.json();
    let valid = data.find((obj) => id === obj.studentId);
    if (valid) {
        return {
            found: true,
            attendance: valid,
        };
    } else {
        return {
            found: false,
        };
    }
}






async function getmarks(studentId) {

    const response = await fetch(
        `${url}marks/?studentId=${studentId}`
    );

    if (!response.ok) {
        throw new Error("Student not found------->");
    }

    const student = await response.json();

    return student[0];
}



async function getfees(studentId) {

    const response = await fetch(
        `${url}fees/?studentId=${studentId}`
    );

    if (!response.ok) {
        throw new Error("Student not found------->");
    }

    const student = await response.json();

    return student[0];
}

// Admin_login("admin", "1234").then((res) => {
//     console.log(res);
// });
getStudent(101).then((res) => {
    console.log(res);
});
// Get_Attendance(101).then((res) => {
//     console.log(res);
// });

// getmarks(101).then((res) => {
//     console.log(res);
// });

getfees(101).then((fee)=>{
    console.log(fee)
})

async function reportGen(studentId) {

    let studentdata = await getStudent(studentId);
    let studentattendance = await Get_Attendance(studentId);
    let studentmarks = await getmarks(studentId);
    let studentfee = await getfees(studentId);

    let str = "";

    str = str + "Name : " + studentdata.name + "\n";
    str = str + "Student ID : " + studentdata.id + "\n";
    str = str + "Course : " + studentdata.course + "\n";

    str = str + "Attendance : " +
          studentattendance.attendance.attendance + "%\n";

    str = str + "Java Marks : " + studentmarks.java + "\n";
    str = str + "JavaScript Marks : " + studentmarks.javascript + "\n";
    str = str + "DBMS Marks : " + studentmarks.dbms + "\n";

    let total = studentmarks.java +
                studentmarks.javascript +
                studentmarks.dbms;

    str = str + "Total Marks : " + total + "/300\n";

    str = str + "Fee Amount : " + studentfee.amount + "\n";
    str = str + "Fee Status : " + studentfee.status + "\n";

    return str;
}

// reportGen(101).then((report) => {
//     console.log(report);
// });



const BASE_URL = "http://localhost:3000";

async function adminLogin(username, password) {

    const response = await fetch(
        `${BASE_URL}/admins?username=${username}&password=${password}`
    );

    if (!response.ok) {
        throw new Error("Login API failed");
    }

    const admins = await response.json();

    if (admins.length === 0) {
        throw new Error("Invalid username or password");
    }
     
    

    return {
        success: true,
        message: "Admin Login Successful",
        admin: admins[0]
    };
}   


async function getAttendance(studentId) {

    const response = await fetch(
        `${BASE_URL}/attendance?studentId=${studentId}`
    );

    if (!response.ok) {
        throw new Error("Attendance API failed");
    }

    const attendance = await response.json();

    if (attendance.length === 0) {
        throw new Error("Attendance not found");
    }

    return attendance[0];
}

async function getStudentReport(studentId) {

    try {

        const loginResponse =
            await adminLogin("admin", 1234);

        console.log(
            "LOGIN:",
            loginResponse.message
        );


        const student =
            await getStudent(studentId);

        console.log(
            "STUDENT:",
            student
        );
            const [
            attendance,
            marks,
            fees
        ] = await Promise.all([

            getAttendance(student.id),

            getmarks(student.id),

            getfees(student.id)

        ]);
       console.log("ATTENDANCE:", attendance);

        console.log("MARKS:", marks);

        console.log( "FEES:", fees );

        const report = {

            student: student,

            attendance:  attendance.attendance,

            marks: {
                java: marks.java,
                javascript: marks.javascript,
                dbms: marks.dbms
            },

            fees: {
                amount: fees.amount,
                status: fees.status
            }

        };


        console.log("******************************");
        console.log("FINAL STUDENT REPORT");
        console.log("******************************");
       

        console.log(report);

    } catch (error) {

        console.log(
            "ERROR:",
            error.message
        );

    }
}
getStudentReport(101)