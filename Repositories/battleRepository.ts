import db from "./../config/database.js";

async function postBattleResults (user : string, win : number, loss : number , draw: number) {
    await db.query(`
    INSERT INTO fighters (username, wins, losses, draws)
    VALUES ($1, $2, $3, $4)`,[user, win, loss, draw]); 
}

const battleRepository = {
    postBattleResults
}

export default battleRepository;