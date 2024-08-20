import express from "express";
import {
  getCoursesCtr,
  createCourseCtr,
  deleteCourseByIdCtr,
} from "../controllers/courses.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getCoursesCtr);
router.post("/", createCourseCtr);
router.delete("/del/:courseId", deleteCourseByIdCtr);

export default router;
