let students = [];
let Subjects = ["math", "english", "hindi", "computer", "accounts"];
// 1. Add Student
function addStudent() {
  let name = prompt("Enter name:");
  let roll_no = Number(prompt("Enter roll number:"));

  let marks = [];

  for (let i = 0; i < 5; i++) {
    let mark = Number(prompt(`Enter marks for Subject ${Subjects[i]}:`));
    marks.push(mark);
  }

  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  let percentage = total / Subjects.length;

  let student = {
    name: name,
    roll_no: roll_no,
    marks: marks,
    total: total,
    percentage: percentage,
  };

  students.push(student);
}

// 2. Display All Students

function displayStudent() {
  for (let key of students) {
    drawStudent(key);
  }
}

function drawStudent(key) {
  let str = "";

  str += `Student name : ${key.name}\nRoll no. : ${key.roll_no}\n`;
  str += `Subject marks :\n`;
  for (let i = 0; i < 5; i++) {
    str += `${Subjects[i]} : ${key.marks[i]}\n`;
  }
  str += `total : ${key.total}\n`;
  str += `percentage : ${key.percentage}%\n`;

  console.log(str);
}

// 3. Search Student

function searchStudent() {
  let id = prompt("Enter roll number to find student");
  let obj = {};
  for (let key of students) {
    if (key.roll_no == id) {
      obj = key;
    }
  }
  drawStudent(obj);
}
// 4. Find Class Topper
function Topper() {
  let min = students[0].total;
  let obj = students[0];
  for (let key of students) {
    if (key.total > min) {
      obj = key;
      min = key.total;
    }
  }
  drawStudent(obj);
}

// 5. Subject Toppers
function TopperS() {
  for (let i = 0; i < Subjects.length; i++) {
    let max = students[0].marks[i];
    let obj = students[0];

    for (let key of students) {
      if (key.marks[i] > max) {
        max = key.marks[i];
        obj = key;
      }
    }
    drawStudent(obj);
  }
}

// 6. Failed Students
function FailedS() {
  for (let key of students) {
    if (key.percentage < 40) {
      drawStudent(key);
    }
  }
}

// 7. Class Statistics
function Statistics() {
  console.log("toppers :");
  Topper();
  console.log("Subjects toppers :");
  TopperS();
  console.log("failed students");
  FailedS();
  console.log("classs avg :");
  let sum = 0;
  for (let key in students) {
    sum += key.percentage;
  }
  console.log(Number(sum / students.length).toFixed(2));
}
// 8. Sort Students by Percentage
function sortStudents() {
  for (let i = 0; i < students.length - 1; i++) {
    for (let j = 0; j < students.length - 1 - i; j++) {
      if (students[j].percentage > students[j + 1].percentage) {
        let temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }

  displayStudent();
}

// 10. Find Second Topper
function SecondTopper() {
  let first = students[0];
  let second = null;

  for (let key of students) {
    if (key.total > first.total) {
      second = first;
      first = key;
    } else if (
      key.total < first.total &&
      (second == null || key.total > second.total)
    ) {
      second = key;
    }
  }

  if (second == null) {
    console.log("No second topper found");
  } else {
    console.log("Second Topper :");
    drawStudent(second);
  }
}

// 11. Grade Statistics
function GradeStatistics() {
  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;
  let F = 0;

  for (let key of students) {
    if (key.percentage >= 80) {
      A++;
    } else if (key.percentage >= 60) {
      B++;
    } else if (key.percentage >= 50) {
      C++;
    } else if (key.percentage >= 40) {
      D++;
    } else {
      F++;
    }
  }

  console.log(" GRADE STATISTICS ");
  console.log("Grade A : " + A);
  console.log("Grade B : " + B);
  console.log("Grade C : " + C);
  console.log("Grade D : " + D);
  console.log("Grade F : " + F);
}
function menu() {
  let run = true;

  while (run) {
    let str = "";
    str += "===== STUDENT MANAGEMENT SYSTEM =====\n";
    str += "1. Add Student\n";
    str += "2. Display All Students\n";
    str += "3. Search Student\n";
    str += "4. Find Class Topper\n";
    str += "5. Subject Toppers\n";
    str += "6. Failed Students\n";
    str += "7. Class Statistics\n";
    str += "8. Sort Students by Percentage\n";
    str += "9. Exit\n";
    str += "10. Find Second Topper\n";
    str += "11. Grade Statistics\n";
    str += "\nEnter your choice:";

    let option = Number(prompt(str));

    switch (option) {
      case 1:
        addStudent();
        break;

      case 2:
        displayStudent();
        break;

      case 3:
        searchStudent();
        break;

      case 4:
        Topper();
        break;

      case 5:
        TopperS();
        break;

      case 6:
        FailedS();
        break;

      case 7:
        Statistics();
        break;

      case 8:
        sortStudents();
        break;

      case 9:
        run = false;
        console.log("Program exited");
        break;
        case 10:
            SecondTopper();
            break;
        case 11:
            GradeStatistics()
            break;
      default:
        console.log("Invalid option");
        break;
    }
  }
}

menu();
