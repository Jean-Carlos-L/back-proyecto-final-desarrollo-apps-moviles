import mysql2, { Pool } from 'mysql2/promise';

const remotePool: Pool = mysql2.createPool({
   port: process.env.MYSQL_REMOTE_PORT ? parseInt(process.env.MYSQL_REMOTE_PORT) : 3306,
   host: process.env.MYSQL_REMOTE_HOST,
   user: process.env.MYSQL_REMOTE_USER,
   password: process.env.MYSQL_REMOTE_PASSWORD,
   database: process.env.MYSQL_REMOTE_DATABASE,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
   namedPlaceholders: true
});

export default remotePool;