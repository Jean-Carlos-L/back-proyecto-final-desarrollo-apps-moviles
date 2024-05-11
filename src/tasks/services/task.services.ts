import { queriesDb } from "../../utils/queriesDb";
import { TaskCreate, TaskUpdate } from "../models/task.model";
import createInsertQuery, { createUpdateQuery } from "../../utils/generateQueries.utils";

const getTasks = async ({ user_id }: { user_id: number }) => {
   const query = `SELECT * FROM tasks WHERE user_id = ?`;
   const rows = await queriesDb(query, [user_id]);
   return rows;
}

const getTaskById = async (id: number) => {
   const query = `SELECT * FROM tasks WHERE id = ?`;
   const rows = await queriesDb(query, [id]);
   return rows;
}

const createTask = async (newTask: TaskCreate) => {
   const { query, values } = createInsertQuery('tasks', newTask);
   const rows = await queriesDb(query, values);
   return rows;
}

const updateTask = async (editTask: TaskUpdate) => {
   const { query, values } = createUpdateQuery('tasks', editTask, editTask.id);
   const rows = await queriesDb(query, values);
   return rows;
}

const deleteTask = async (id: number) => {
   const query = `DELETE FROM tasks WHERE id = ?`;
   const rows = await queriesDb(query, [id]);
   return rows;
}

const completeTask = async (id: number) => {
   const query = `UPDATE tasks SET state = 2 WHERE id = ?`;
   const rows = await queriesDb(query, [id]);
   return rows;
}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask, completeTask };