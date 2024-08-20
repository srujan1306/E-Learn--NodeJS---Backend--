import cors from "cors";
import courseRouter from "./routes/courses.route.js";
// import usersRouter from "./routes/users.route.js";
import express from "express";
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/Elearn", courseRouter);
// app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// request -> index.js -> Router -> Controller -> Service -> DB
