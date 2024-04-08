import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  uri: "http://localhost:3306/tienda",
});
