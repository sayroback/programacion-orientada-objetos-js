console.log("Hola");

const juan = {
  // Attributes
  name: "Juan",
  age: 25,
  coursesApproved: ["HTML and CSS", "JavaScript"],

  // Methods

  // New course approved
  approveCourse(newCourse) {
    this.coursesApproved.push(newCourse);
  },
};

// New course approved
juan.coursesApproved.push("Responsive design");
console.log(juan);

function Student(name, age, coursesApproved) {
  this.name = name;
  this.age = age;
  this.coursesApproved = coursesApproved;
}

Student.prototype.approveCourse = function (newCourse) {
  this.coursesApproved.push(newCourse);
};

const luis = new Student("Luis", 20, ["Introduction to graphic design"]);

console.log(luis);

// Prototype with class syntax
class Student2 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    // Attributes
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
  // Methods

  // New course approved
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const itzel = new Student2({
  name: "Itzel",
  username: "Nushka",
  coursesApproved: [],
});
itzel.approveCourse("Child psychology");
console.log(itzel);
