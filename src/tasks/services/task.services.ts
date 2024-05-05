import { queriesDb } from "../../utils/queriesDb";
import { CURRENT_TIMESTAMP } from "../../utils/dates.utils";
import { TaskCreate, TaskUpdate } from "../types/task";
import createInsertQuery from "../../utils/generateQueries.utils";

const getTasks = async () => {
   const query = `SELECT * FROM tasks`;
   const rows = await queriesDb(query);
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
   const query = `UPDATE tasks SET ? WHERE id = ?`;
   const rows = await queriesDb(query, [{ ...editTask, updated_at: CURRENT_TIMESTAMP() }, editTask.id]);
   return rows;
}

const deleteTask = async (id: number) => {
   const query = `DELETE FROM tasks WHERE id = ?`;
   const rows = await queriesDb(query, [id]);
   return rows;
}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };