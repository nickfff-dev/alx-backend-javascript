export default class HolbertonCourse {
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }

    get name() {
      return this._name;
    }

    set name(name) {
      this._name = name;
    }

    get length() {
      return this._length;
    }

    set length(length) {
      this._length = length;
    }

    get students() {
      return this._students;
    }

    set students(students) {
      this._students = students;
    }
  }
