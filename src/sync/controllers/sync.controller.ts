import { Request, Response } from 'express';
import syncServices from "../services/sync.services"

const getQuerysToSyncLocal = async (_: Request, res: Response) => {
    try {
        const queries = await syncServices.updateRempoteQueries();
        res.status(200).json(queries);
    } catch (error) {
        console.error(error)
        res.status(500).json('Error in getQuerysToSyncLocal function');
    }
}

const getQuerysToSyncRemote = async (req: Request, res: Response) => {
    try {
        const localQueries = req.body;
        await syncServices.updateRemoteWithLocalQueries(localQueries);
        res.status(200).json({
            message: 'Remote database updated successfully'
        });
    } catch (error) {
        console.error(error)
        res.status(500).json('Error in getQuerysToSyncRemote function');
    }
}


export default { getQuerysToSyncLocal, getQuerysToSyncRemote };