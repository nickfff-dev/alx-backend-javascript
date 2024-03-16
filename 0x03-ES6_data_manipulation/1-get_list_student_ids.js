export default function getListStudentIds(listStudents) {
  let studentIds = [];
  if (!(listStudents instanceof Array)) {
    return studentIds;
  }
  studentIds = listStudents.map((student) => student.id);
  return studentIds;
};
