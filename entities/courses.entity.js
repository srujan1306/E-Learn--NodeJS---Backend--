import { Entity } from "electrodb"; //ORM
import { client } from "../util/dbconnection.js";
const Courses = new Entity(
  {
    model: {
      entity: "Courses",
      version: "1",
      service: "CourseService",
    },
    attributes: {
      courseId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      price: {
        type: "number",
        required: true,
      },
      category: {
        type: "string",
        required: true,
      },
      rating: {
        type: "number",
        required: true,
      },
      instructor: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      prerequisites: {
        type: "string",
        required: true,
      },
      imageUrl: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["courseId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "courses" }
);

export { Courses };
