interface playerModel {
    id: number;
    name: string;
}

const database: playerModel[] = [
    { id: 1, name: "Messi" },
    { id: 2, name: "Cristiano Ronaldo" },
    { id: 3, name: "Neymar" },
    { id: 4, name: "Mbappe" },
    { id: 5, name: "Hazard" },
    { id: 6, name: "Lewandowski" },
    { id: 7, name: "Salah" },
]

export const findAllPlayers = async (): Promise<playerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<playerModel | undefined> => {
    return database.find(player => player.id === id);
}