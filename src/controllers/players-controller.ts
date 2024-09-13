import {Request, Response} from 'express';
import { noContent } from '../utils/http-helper';
import { createPlayerService, getPlayerService, getPlayerServiceById, deletePlayerService, updatePlayerService} from '../services/player-service';
import { statisticsModel } from '../models/statistics-model';

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await getPlayerServiceById(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;

    const httpResponse = await createPlayerService(bodyValue);

    if(httpResponse !== undefined){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        let response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayer = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: statisticsModel = req.body;

    const httpReponse = await  updatePlayerService(id, bodyValue);
    res.status(httpReponse.statusCode).json(httpReponse.body);
}