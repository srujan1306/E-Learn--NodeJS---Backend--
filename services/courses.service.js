import { Courses } from "../entities/courses.entity.js";

async function getCourses() {
  return await Courses.scan.go();
}
async function createCourse(data) {
  return await Courses.create(data).go();
}
async function deleteCourseById(courseId) {
  await Courses.delete({ courseId: courseId }).go();
}

export { getCourses, createCourse, deleteCourseById };
