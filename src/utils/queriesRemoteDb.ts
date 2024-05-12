import { PoolConnection, RowDataPacket } from 'mysql2/promise';
import pool from '../config/connectionRemoteDb';

export const queriesRemoteDb = async (query: string, params?: any[]) => {
   let connection: PoolConnection | undefined;
   try {
      connection = await pool.getConnection();

      /* console.log('query', query)
      console.log('params', params) */
      const [rows] = await connection.execute<RowDataPacket[]>(query, params);

      return rows;
   } catch (error) {
      console.error('Error in queriesDb function', error);
      throw new Error('Error in queriesDb function')
   } finally {
      if (connection) {
         connection.release();
      }
   }
}
