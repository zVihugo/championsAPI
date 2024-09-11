import { findAllPlayers } from "../repositores/players-repository";
import { OK, noContent } from "../utils/http-helper"

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