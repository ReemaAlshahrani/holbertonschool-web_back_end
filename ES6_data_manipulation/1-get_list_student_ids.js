/**
 * Returns an array of student ids from a given list of student objects.
 * Returns an empty array if the input is not a valid array.
 */
export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map((student) => student.id);
}
