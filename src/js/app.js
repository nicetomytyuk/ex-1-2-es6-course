import { Student } from "./student.js";

let subjects = ["Math", "English", "Italian", "Information Technologies", "History"];
// loading subjects in form select
for (const subject of subjects) {
    var option = document.createElement("option");
    option.value = subject
    option.text = subject
    document.querySelector('select[name="subjects"]').appendChild(option)
}
let arrayOfStudents = [];
// Static students data
arrayOfStudents.push(new Student("Igor", "Mytyuk", 21, ["Informatica"]));
arrayOfStudents.push(
  new Student("Ian", "Gardini", 36, ["Matematica", "Informatica"])
);
arrayOfStudents.push(
  new Student("Stefano", "Guidetti", 32, ["Matematica", "Italiano", "Scienze"])
);

var formStudent = document.forms["formStudent"];

formStudent.addEventListener("submit", function (event) {
  event.preventDefault();

  var subjectsArray = [];
  var name = this.elements["name"].value;
  var surname = this.elements["surname"].value;
  var age = this.elements["age"].value;
    if (!isAgeValid(age)) {
        alert("Only students with age of >12 are admitted, try again.")
        this.reset();
        return;
    }

  var subjects = this.elements["subjects"];
  for (const subject of subjects) {
    if (subject.selected) subjectsArray.push(subject.value);
  }

  addStudent(new Student(name, surname, age, subjectsArray));

  this.reset();
});

function isAgeValid(age) {
    if (age <= 12) {
        return false;
    }
    return true
}

function addStudent(student) {
  arrayOfStudents.push(student);

  createStudentCard(student);
}

function createStudentCard(student) {
  document.querySelector(".students").innerHTML += `<div class="card shadow-sm mb-2">
                <div class="card-body">       
                    <h5 class="card-title">${student.getFullName()}</h5>
                    <h6 class="card-subtitle mb-2 ">Age: <span class="${
                      student.age > 18 ? "text-success" : "text-warning"
                    }">${student.age}</span></h6>
                    <ul>
                    ${student.favSubjects
                      .map((subject) => {
                        return `<li>${subject}</li>`;
                      })
                      .join("")}
                    </ul>
                </div>
            </div>`;
}

function getStudents() {
  for (const student of arrayOfStudents) {
    createStudentCard(student);
  }
}

getStudents();
