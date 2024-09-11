import {Request, Response} from 'express';
import { getPlayerService } from '../services/player-service';

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    

    res.status(httpResponse.statusCode).json(httpResponse.body);

}