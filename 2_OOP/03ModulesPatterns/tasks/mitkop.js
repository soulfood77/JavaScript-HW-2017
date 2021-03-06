function solve() {

  // init the sysytem
  // function init(title, presentationTitle) {
  //   // Create
  //   // validate title
  //   validateTitle(title);

  //   // set title
  //   this.courseTitle = title;

  //   // validate presantation
  //   if (
  //     presentationTitle === undefined ||
  //     !Array.isArray(presentationTitle) ||
  //     presentationTitle[0] === undefined
  //   ) {
  //     throw 'There are no presentations';
  //   };
  //   presentationTitle.forEach(x => validateTitle(x));

  //   // Create ID and set to array presantation
  //   //presentationTitle.forEach((x, i) => this.presentations.push({ title: x, ID: (i + 1) }));
  //   this.presentations = presentationTitle;

  //   this.students = [];
  //   return this;
  // }

  function validateTitle(value) {
    if (typeof (value) !== 'string') {
      throw value + ' must be a string';
    }
    //Titles have at least one character
    if (value.length < 2) {
      throw 'Titles have at least one character';
    }
    //Titles do not start or end with spaces
    if ((value.match(/^ | $/gm) || '').length > 0) {
      throw 'title start or end with space';
    }
    //Titles do not have consecutive spaces
    if ((value.match(/  /g) || '').length > 0) {
      throw 'Titles do not have consecutive spaces';
    }

    return value;
  }
  function validateStudentName(name) {
    // check if is a string
    if (
      name === undefined ||
      typeof (name) !== 'string'
    ) {
      throw name + ' must be a string'
    }

    // Names start with an upper case letter
    // All other symbols in the name (if any) are lowercase letters
    let match = name.match(/^[A-Z][a-z]*$/);
    if (match === null) {
      throw 'invalid Student name'
    }
  }
  function validateID(ID, lims) {
    // check if not a number
    if (Number.isNaN(ID)) {
      throw 'ID must be a number';
    }

    // check if not integer
    if (ID !== (ID | 0)) {
      throw 'invalid ID';
    }

    // check if out of range
    if (
      ID > lims ||
      ID < 1
    ) {
      throw 'Invalid ID';
    }
  }

  // Add student to list
  // function addSt(name) {
  //   let fName, lName, mName;
  //   [fName, lName, mName] = name.split(' ');

  //   if (mName !== undefined) {
  //     throw 'student have more than 2 names';
  //   }
  //   validateStudentName(fName);
  //   validateStudentName(lName);
  //   let id = this.students.length + 1;
  //   let element = {
  //     ID: id,
  //     firstname: fName,
  //     lastname: lName,
  //     homeWork: [],
  //     results: 0
  //   };
  //   this.students.push(element);
  //   return id;
  // }

  //get list of all students
  // function getAllStudents() {
  //   let allStudents = [];
  //   this.students.forEach(
  //     x => allStudents.push({ firstname: x.firstname, lastname: x.lastname, id: x.ID })
  //   );
  //   return allStudents;
  // }

  // Submit Homework 
  // function submitHomework(stID, hwID) {
  //   validateID(stID, this.students.length);
  //   validateID(hwID, this.presentations.length);
  //   this.students[stID - 1].homeWork.push(hwID);
  // }

  // push exam results
  // function pushExamResults(results) {
  //   let studentWithHW = [];
  //   if (
  //     results === undefined ||
  //     !Array.isArray(results)
  //   ) {
  //     throw 'result must be not empty array!';
  //   }

  //   results.forEach(x => {
  //     validateID(x.StudentID, this.students.length);
  //     studentWithHW[x.StudentID] = (studentWithHW[x.StudentID] || 0) + 1;
  //     if (studentWithHW[x.StudentID] > 1) {
  //       throw 'StudentID is given more than once';
  //     };
  //     if (
  //       x.score === undefined ||
  //       Number.isNaN(x.score)) {
  //       throw 'score must be number';
  //     }
  //   });
  //   results.forEach(x => this.students[x.StudentID].results = x.score);
  //   //return this;
  // }

  var Course = {
    courseTitle: '',
    presentations: [],
    students: [],

    init: function (title, presentationTitle) {
      // Create
      // validate title
      validateTitle(title);

      // set title
      this.courseTitle = title;

      // validate presantation
      if (
        presentationTitle === undefined ||
        !Array.isArray(presentationTitle) ||
        presentationTitle[0] === undefined
      ) {
        throw 'There are no presentations';
      };
      presentationTitle.forEach(x => validateTitle(x));

      // Create ID and set to array presantation
      //presentationTitle.forEach((x, i) => this.presentations.push({ title: x, ID: (i + 1) }));
      this.presentations = presentationTitle;

      this.students = [];
      return this;
    },
    addStudent: function (name) {
      let fName, lName, mName;
      [fName, lName, mName] = name.split(' ');

      if (mName !== undefined) {
        throw 'student have more than 2 names';
      }
      validateStudentName(fName);
      validateStudentName(lName);
      let id = this.students.length + 1;
      let element = {
        ID: id,
        firstname: fName,
        lastname: lName,
        homeWork: [],
        results: 0
      };
      this.students.push(element);
      return id;
    },
    getAllStudents: function () {
      let allStudents = [];
      this.students.forEach(
        x => allStudents.push({ firstname: x.firstname, lastname: x.lastname, id: x.ID })
      );
      return allStudents;
    },
    submitHomework: function (studentID, homeworkID) {
      validateID(studentID, this.students.length);
      validateID(homeworkID, this.presentations.length);
      this.students[studentID - 1].homeWork.push(homeworkID);
    },
    pushExamResults: function (results) {
      let studentWithHW = [];
      if (
        results === undefined ||
        !Array.isArray(results)
      ) {
        throw 'result must be not empty array!';
      }

      results.forEach(x => {
        validateID(x.StudentID, this.students.length);
        studentWithHW[x.StudentID] = (studentWithHW[x.StudentID] || 0) + 1;
        if (studentWithHW[x.StudentID] > 1) {
          throw 'StudentID is given more than once';
        };
        if (
          x.score === undefined ||
          Number.isNaN(x.score)) {
          throw 'score must be number';
        }
      });
      results.forEach(x => this.students[x.StudentID].results = x.score);
      //return this;
    },

    getTopStudents: function () {
    }
  };
  return Course;
}

module.exports = solve;