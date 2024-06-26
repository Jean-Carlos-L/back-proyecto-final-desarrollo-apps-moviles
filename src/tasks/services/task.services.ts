import { queriesDb } from "../../utils/queriesDb";
import { TaskCreate, TaskUpdate } from "../models/task.model";
import createInsertQuery, { createUpdateQuery, createSyncQuery } from "../../utils/generateQueries.utils";



const getTasks = async ({ user_id }: { user_id: number }) => {
   const query = `SELECT * FROM tasks WHERE user_id = ?`;
   const rows = await queriesDb(query, [user_id]);
   return rows;
}

const getTaskById = async (id: string) => {
   const query = `SELECT * FROM tasks WHERE id_task = ?`;
   const rows = await queriesDb(query, [id]);
   return rows;
}

const createTask = async (newTask: TaskCreate) => {
   const { query, values } = createInsertQuery('tasks', newTask);
   const rows = await queriesDb(query, values);

   const querySync = createSyncQuery(query, values);
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);

   return rows;
}

const updateTask = async (editTask: TaskUpdate) => {
   const { query, values } = createUpdateQuery('tasks', editTask, editTask.id_task);
   const rows = await queriesDb(query, values);

   const querySync = createSyncQuery(query, values);
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);

   return rows;
}

const deleteTask = async (id: string) => {
   const query = `DELETE FROM tasks WHERE id_task = ?`;
   const rows = await queriesDb(query, [id]);

   const querySync = createSyncQuery(query, [id]);
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);

   return rows;
}

const completeTask = async (id: string) => {
   const query = `UPDATE tasks SET state = 2 WHERE id_task = ?`;
   const rows = await queriesDb(query, [id]);

   const querySync = createSyncQuery(query, [id]);
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);
   return rows;
}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask, completeTask };