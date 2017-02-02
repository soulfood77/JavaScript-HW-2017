/* Task Description */
/*
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
  var Course = {
    title: '',
    presentations: [],
    students: [],

    // INITIALISE
    init: function (ttl, ppt) {
      let regex = /(\s{2,})|(^ )|( $)/g;

      if (arguments.length < 1 || !ttl) {
        throw 'Title is required and cannot be empty';
      }
      if (arguments.length < 2 || ppt.length < 1) {
        throw 'Presentations are required and cannot be empty';
      }
      if (regex.test(ttl)) {
        throw 'Course title contains invalid characters';
      }
      for (let presentation of ppt) {
        if (regex.test(presentation)) {
          throw 'Presentation contains invalid characters';
        }
        if (!presentation) {
          throw 'Presetantion title cannot be empty';
        }
      }

      this.title = ttl;
      this.presentations = ppt;
      this.students = [];

      return this;
    },
    // ADD STUDENT
    addStudent: function (name) {
      let names = name.split(' ');
      let regex = /^[A-Z][a-z]*/;
      if (names.length !== 2) {
        throw 'Invalid count of student name(s)';
      }
      if (!names.every(n => regex.test(n))) {
        throw 'Invalid characters of student name(s)';
      }
      let student = {
        firstname: names[0],
        lastname: names[1],
        ID: this.students.length + 1,
        homeworks: [],
        examScore: 0,
        finalScore: 0
      }
      this.students.push(student);
      return student.ID;
    },

    // GET ALL STUDENTS ===== property names must be as in task description, they get validated!
    getAllStudents: function () {

      // from Daniela Popova
      // return this.students.map(s => {
      //   return {
      //     firstname: s.firstname,
      //     lastname: s.lastname,
      //     id: s.ID
      //   };
      // });


      let printStudents = [];
      if (this.students.length < 1) {
        return printStudents;
      }

      // from MitkoP
      this.students.forEach(x =>
        printStudents.push({ firstname: x.firstname, lastname: x.lastname, id: x.ID }));

      // for (let student of this.students) {
      //   let st = {
      //     firstname: student.firstname,
      //     lastname: student.lastname,
      //     id: student.ID
      //   }
      //   printStudents.push(st);
      // }

      return printStudents;
    },

    // SUBMIT HOMEWORK
    submitHomework: function (studentID, homeworkID) {
      if (!this.students.some(s => s.ID === studentID)) {
        throw 'No student with such ID';
      }
      if (!this.presentations[homeworkID - 1]) {
        throw 'No matching presentation for this homework';
      }
      let student = this.students.find(s => s.ID === studentID);
      student.homeworks.push(homeworkID);
    },

    //EXAM RESULSTS
    pushExamResults: function (results) {
      if (results.some(r => isNaN(r.StudentID))) {
        throw 'StudentID is not a number';
      }
      if (results.some(r => r.StudentID > this.students.length)) {
        throw 'StudentID is larger than students number';
      }
      if (results.some(r => r.StudentID < 1)) {
        throw 'StudentID is smaller than first student\'s number';
      }
      if (results.some(r => isNaN(r.score))) {
        throw 'Score is not a number';
      }
      let checkForDuplicates = results.filter((results, index, self) =>
        self.findIndex(r =>
          r.StudentID === results.StudentID)
        !== index);
      if (checkForDuplicates.length > 0) {
        throw 'Repeating student. Tried to cheat';
      }

      for (let student of this.students) {
        let sIndex = results.findIndex(s => s.StudentID === student.ID);
        if (sIndex !== -1) {
          student.examScore = results[sIndex].score;
        }
      }
    },

    // TOP STUDENTS
    getTopStudents: function () {
      for (let student of this.students) {
        student.finalScore = (student.examScore * 0.75) + ((student.homeworks.length / this.presentations.length) * 0.25);
      }
      this.students.sort((a, b) => a.finalScore < b.finalScore);
      if (this.students.length < 10) {
        return this.students;
      }
      else {
        return this.students.slice(0, 10);
      }
    }
  };

  return Course;
}


module.exports = solve;

// TESTS

let cour = solve();
let tit = 'Test valid title';
let pre = ['pres1', 'pres2', 'pres3'];

cour.init(tit, pre);
cour.addStudent('Ivan Petrov');
cour.addStudent('J P');
cour.addStudent('Lyudmila Zhivkova');

cour.submitHomework(2, 1);
cour.submitHomework(2, 2);
cour.submitHomework(2, 3);
cour.submitHomework(1, 1);
cour.submitHomework(1, 2);
cour.submitHomework(3, 1);

cour.pushExamResults([{ StudentID: 2, score: 5 }, { StudentID: 1, score: 4 }, { StudentID: 3, score: 2 }]);

let top = cour.getTopStudents();
console.log(cour.getAllStudents());

console.log('the end');

//Find duplicate object properties http://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript