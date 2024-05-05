export default function createInsertQuery(tableName: string, data: Record<any, any>) {
   // Obtén las claves y los valores del objeto
   const keys = Object.keys(data);
   const values = Object.values(data);

   // Crea una cadena con los nombres de las columnas
   const columns = keys.join(', ');

   // Crea una cadena con los marcadores de posición
   const placeholders = keys.map(() => '?').join(', ');

   // Crea la consulta SQL
   const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;

   // Devuelve la consulta y los valores
   return { query, values };
}