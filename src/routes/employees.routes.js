import { Router } from "express";
import { con } from "../db.js";

const router = Router();

const getEmployee = async () => {
  const [result] = await con.query("SELECT * FROM employee");
  let text = "";
  result.map((v) => {
    text = text.concat(
      `Id: ${v.id}, Name: ${v.name}, Salary: ${v.salary}<br/>`
    );
  });
  return text;
};

router.get("/employee", async (req, res) => {
  console.clear();
  console.log("Get Employees!");
  res.send(await getEmployee());
});

router.post("/employee", (req, res) => {
  console.clear();
  console.log("Name: ", req.headers.employeename);
  console.log("Salary: ", req.headers.salary);
  con.query(
    `insert into employee (name, salary) values ('${req.headers.employeename}', ${req.headers.salary});`
  );
  res.send("succes");
});

export default router;
