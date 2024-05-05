import { Request, Response } from "express";
import taskServices from "../services/task.services";

const getTasks = async (_: Request, res: Response) => {
   try {
      const tasks = await taskServices.getTasks();
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
      const id = parseInt(req.params.id);
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
      const task = await taskServices.createTask({ ...req.body });
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
      const id = parseInt(req.params.id);
      const { title, description, state } = req.body;
      const task = await taskServices.updateTask({ id, title, description, state });
      res.status(200).json({
         message: 'Task updated successfully',
         data: task
      });
   } catch (error) {
      res.status(500).json({ message: 'Error in updateTask function' });
   }
}


const deleteTask = async (req: Request, res: Response) => {
   try {
      const id = parseInt(req.params.id);
      await taskServices.deleteTask(id);
      res.status(200).json({
         message: 'Task deleted successfully'
      });
   } catch (error) {
      res.status(500).json({ message: 'Error in deleteTask function' });
   }
}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };