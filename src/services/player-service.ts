import { playerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";
import { deletePlayer, findAllPlayers, findPlayerById, insertPlayer, putPlayer } from "../repositores/players-repository";
import { OK, badRequest, created, noContent } from "../utils/http-helper"

export const getPlayerService = async ( ) => {

    const data = await findAllPlayers();

    let response = null;

    if(data){
        response = await OK(data);
    }else{
        response = await noContent();
    }
    return response;
}

export const getPlayerServiceById = async(id: number) => {

    const data = await findPlayerById(id);

    let response = null;

    if(data){
        response = await OK(data);
    }else{
        response = await noContent();
    }

    return response;
}

export const createPlayerService = async(player: playerModel) => {
    let response = null;
    const data = await insertPlayer(player);

   if(Object.keys(player).length !== 0){
        response = await created();
   }else{
        response = badRequest();
   }

   return response;
}

export const deletePlayerService = async(id: number) => {
    let response =  null;
    
    await deletePlayer(id);

    response = await OK({message: "Deleted"});

    return response;
}


export const updatePlayerService = async(id: number, statistics: statisticsModel) => {
   let response = null;

   await putPlayer(id, statistics);

   if(Object.keys(statistics).length === 0){
        response = await OK({message: "Updated"});
   }else{
        response = await badRequest();
   }

    return response;

}