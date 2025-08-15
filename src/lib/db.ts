// db.ts
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "18861995Fm$",
  database: "laravel_db_local",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
