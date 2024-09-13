import { playerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";


const database: playerModel[] = [
    {
        id: 1, name: "Lionel Messi", club: "Paris Saint-Germain", nationality: "Argentina", position: "Forward", statistics: {
            Overall: 93,
            Pace: 89,
            Shooting: 80,
            Passing: 95,
            Dribbling: 95,
            Defending: 85,
            Physical: 65,
        }
    },
    {
        id: 2, name: "Cristiano Ronaldo", club: "Manchester United", nationality: "Portugal", position: "Forward", statistics: {
            Overall: 92,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77,
        }
    },
    {
        id: 3, name: "Neymar Jr", club: "Paris Saint-Germain", nationality: "Brazil", position: "Forward", statistics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 86,
            Dribbling: 94,
            Defending: 37,
            Physical: 58,
        }
    },
    {
        id: 4, name: "Kevin De Bruyne", club: "Manchester City", nationality: "Belgium", position: "Midfielder", statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78,
        }
    },
    {
        id: 5, name: "Robert Lewandowski", club: "Barcelona", nationality: "Poland", position: "Forward", statistics: {
            Overall: 92,
            Pace: 78,
            Shooting: 94,
            Passing: 79,
            Dribbling: 86,
            Defending: 44,
            Physical: 82,
        }
    },
    {
        id: 6, name: "Kylian Mbappe", club: "Paris Saint-Germain", nationality: "France", position: "Forward", statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 88,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 76,
        }
    },
]

export const findAllPlayers = async (): Promise<playerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<playerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: playerModel) => {
    database.push(player);
}

export const deletePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);

    if(index !== -1){
        database.splice(index, 1);
    }
    
}

export const putPlayer = async (id: number, statistics: statisticsModel): Promise<playerModel> => {
    const index = database.findIndex(player => player.id === id);

   if(index !== -1){
    database[index].statistics = statistics;
   }

   return database[index];
}