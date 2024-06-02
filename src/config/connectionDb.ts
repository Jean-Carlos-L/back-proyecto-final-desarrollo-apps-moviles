import mysql2, { Pool } from 'mysql2/promise';

const pool: Pool = mysql2.createPool({
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DATABASE,
   port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
   namedPlaceholders: true
});

export default pool;