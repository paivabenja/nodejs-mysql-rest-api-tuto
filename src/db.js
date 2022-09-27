import { createPool } from "mysql2/promise";

const con = createPool({
  host: "localhost",
  user: "benjaminpaiva",
  password: "benja2005",
  port: 3306,
  database: "paiva",
});

export { con };
