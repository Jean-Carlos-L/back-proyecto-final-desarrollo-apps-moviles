import { Request, Response } from "express";
import taskServices from "../services/task.services";
import { TaskCreate, TaskUpdate } from "../models/task.model";
import { generateUUID } from '../../utils/generateId';


const getTasks = async (req: Request, res: Response) => {
   try {
      const user_id = req.body.userSession.id;
      const tasks = await taskServices.getTasks({ user_id });
      res.status(200).json({
         message: 'Tasks fetched successfully',
         data: tasks
      });
   } catch (error) {
      res.status(500).json({ message: 'Error in getTaks function' });
   }
}

const getTaskById = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const task = await taskServices.getTaskById(id);
      res.status(200).json({
         message: 'Task fetched successfully',
         data: task

      });
   } catch (error) {
      res.status(500).json({ message: 'Error in getTaskById function' });
   }
}

const createTask = async (req: Request, res: Response) => {
   try {
      const user_id = req.body.userSession.id_user;
      delete req.body.userSession;
      const id = await generateUUID();
      const newTask: TaskCreate = {
         ...req.body,
         id_task: id,
         user_id
      };
     
      const task = await taskServices.createTask(newTask);
      res.status(201).json({
         message: 'Task created successfully',
         data: task
      });
   } catch (error) {
      res.status(500).json({ message: 'Error in createTask function' });
   }
}

const updateTask = async (req: Request, res: Response) => {
   try {
      const id_task = req.params.id;
      delete req.body.userSession;
      const editTask: TaskUpdate = { id_task, ...req.body }
      const task = await taskServices.updateTask(editTask);
      res.status(200).json({
         message: 'Task updated successfully',
         data: task
      });
   } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error in updateTask function' });
   }
}


const deleteTask = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      await taskServices.deleteTask(id);
      res.status(200).json({
         message: 'Task deleted successfully'
      });
   } catch (error) {
      res.status(500).json({ message: 'Error in deleteTask function' });
   }
}

const completeTask = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      await taskServices.completeTask(id);
      res.status(200).json({
         message: 'Task completed successfully'
      });
   } catch (error) {
      res.status(500).json({ message: 'Error in completeTask function' });
   }
}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask, completeTask };