import { Courses } from "../entities/courses.entity.js";
import {
  getCourses,
  createCourse,
  deleteCourseById,
  getCourseById,
} from "../services/courses.service.js";
import { v4 as uuidv4 } from "uuid";
async function getCoursesCtr(request, response) {
  const allcourses = await getCourses();
  response.send(allcourses.data);
}

async function createCourseCtr(request, response) {
  const data = request.body;
  data.courseId = uuidv4();
  const addcourse = await createCourse(data);

  response.send(addcourse.data);
}
async function deleteCourseByIdCtr(request, response) {
  const { courseId } = request.params;
  const course_to_deleted = await Courses.get({ courseId: courseId }).go();

  if (course_to_deleted.data) {
    await deleteCourseById(courseId);
    response.send({
      msg: "course deleted successfully",
      data: course_to_deleted.data,
    });
  } else {
    response.status(404).send({ msg: "course not found" });
  }
}
async function getCourseByIdCtr(request, response) {
  const { courseId } = request.params;
  const result = await getCourseById(courseId);
  result
    ? response.send(result.data)
    : response.status(404).send({ msg: "course not found" });
}

export {
  getCoursesCtr,
  createCourseCtr,
  deleteCourseByIdCtr,
  getCourseByIdCtr,
};
