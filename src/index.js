import express from "express";
import employeesRoutes from "./routes/employees.routes.js";

const app = express();
const defaultPort = 3010;
const exampleObject = {
  one: 1,
  two: "2",
  three: [1, 2, 3],
  four: () => "4",
  five: { five: "5" },
};

app.get("/clean", (req, res) => {
  console.clear();
  res.send("All clear!");
});

app.use(employeesRoutes);

app.listen(defaultPort);
console.log("server on port " + defaultPort);
