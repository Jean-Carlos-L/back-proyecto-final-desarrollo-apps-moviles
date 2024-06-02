import { Request, Response } from 'express';
import syncServices from "../services/sync.services"

const getQuerysToSyncLocal = async (_: Request, res: Response) => {
    try {
        const querys = await syncServices.updateRempoteQueries();
        res.status(200).json(querys);
    } catch (error) {
        console.error(error)
        res.status(500).json('Error in login function');
    }
}

export default { getQuerysToSyncLocal };