import { queriesDb } from '../../utils/queriesDb';
import { UserCreate, UserThemeNotification, UserUpdate } from '../types/user';
import { createUpdateQuery } from '../../utils/generateQueries.utils';
import {createSyncQuery} from "../../utils/generateQueries.utils";


const getUserById = async (id: number) => {
   const query = `SELECT id, username, email, state, created_at, updated_at FROM users WHERE id = ?`;
   const rows = await queriesDb(query, [id]);
   return rows;
}

const getUserByEmailAndPassword = async (email: string, password: string) => {
   const query = `SELECT id, username, email, state, created_at, updated_at FROM users WHERE email = ? AND password = ?`;
   const rows = await queriesDb(query, [email, password]);
   return rows;
}

const getUserByEmail = async (email: string) => {
   const query = `SELECT * FROM users WHERE email = ?`;
   const rows = await queriesDb(query, [email]);
   return rows;
}

const createUser = async ({ username, email, password }: UserCreate) => {
   const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
   const rows = await queriesDb(query, [username, email, password]);

   const querySync = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);
   return rows;
}

const updateUser = async (editUser: UserUpdate) => {
   const { query, values } = createUpdateQuery('users', editUser, editUser.id)
   const rows = await queriesDb(query, values);

   const querySync = createSyncQuery(query, values);
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);
   return rows;
}

const updateThemeNotification = async ({ id, theme, notification }: UserThemeNotification) => {
   const query = `UPDATE users SET theme = COALESCE(?, theme), notification = COALESCE(?, notification) WHERE id = ?`;
   const rows = await queriesDb(query, [theme, notification, id]);

   const querySync = `UPDATE users SET theme = COALESCE('${theme}', theme), notification = COALESCE('${notification}', notification) WHERE id = '${id}'`;
   const syncQuery = `INSERT INTO sync_database (query) VALUES (?)`;
   await queriesDb(syncQuery, [querySync]);
   return rows;
}


export default { getUserByEmailAndPassword, createUser, updateUser, getUserByEmail, getUserById, updateThemeNotification };