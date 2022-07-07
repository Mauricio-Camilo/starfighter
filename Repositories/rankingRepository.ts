import db from "./../config/database.js";

async function getRanking () {
    const rankingResults = await db.query(`
    SELECT fighters.username, SUM(fighters.wins) as wins, 
    SUM(fighters.losses) as losses, SUM(fighters.draws) as draws
    FROM fighters
    GROUP BY fighters.username
    ORDER BY wins DESC, draws DESC, losses
    `);
    return rankingResults;
}

const rankingRepository = {
    getRanking
}

export default rankingRepository;