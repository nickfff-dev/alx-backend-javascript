export default function getStudentIdsSum(students) {
  return students.reduce((prev, cur) => prev + cur.id, 0);
}
