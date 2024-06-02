import { CURRENT_TIMESTAMP } from "./dates.utils";

export default function createInsertQuery(tableName: string, data: Record<any, any>) {
   const keys = Object.keys(data);
   const values = Object.values(data);

   const columns = keys.join(', ');

   const placeholders = keys.map(() => '?').join(', ');

   const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;

   return { query, values };
}

export function createUpdateQuery(tableName: string, data: Record<any, any>, id: number) {
   data.updated_at = CURRENT_TIMESTAMP();

   const keys = Object.keys(data);
   const values = Object.values(data);

   const columns = keys.map(key => `${key} = ?`).join(', ');

   const query = `UPDATE ${tableName} SET ${columns} WHERE id_user = ?`;

   return { query, values: [...values, id] };
}

export const createSyncQuery = (query: string, values: any[]) => {
   let querySync = query;

   values.forEach((value) => {
      if (typeof value === 'string') {
          querySync = querySync.replace('?', `'${value}'`);
      } else {
          querySync = querySync.replace('?', `${value}`);
      }
  });

  return querySync;
}