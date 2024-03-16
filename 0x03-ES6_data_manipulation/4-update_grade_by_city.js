const updateStudentGradeByCity = (students, city, newGrades) => {
  const gradesMap = new Map(newGrades.map(({ studentId, grade }) => [studentId, grade]));

  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradesMap.has(student.id) ? gradesMap.get(student.id) : 'N/A',
    }));
};

export default updateStudentGradeByCity;
