import express, { Request, Response } from "express";
import axios from "axios";
import db from "./config/database.js";
import router from "./Routers/index.js";

const app = express();
app.use(express.json());

app.use(router);

// app.post("/battle", async (req : Request, res : Response) => {

//   const { firstUser, secondUser }: {firstUser: string, secondUser: string} = req.body;

//   async function countStars (user : string) {
//     try {
//       const userData = await axios.get(`https://api.github.com/users/${user}/repos`);

//       let userCount = 0;
  
//       userData.data.forEach((element : any)=> {
//         userCount += element.stargazers_count;
//       });
  
//       return userCount;
      
//     } 
//     catch (error) {
//       res.status(500).send(error);
//     }
//   }

//   async function saveBattleResults (user : string, win : number, loss : number , draw: number) {
//     try {
//        await db.query(`
//       INSERT INTO fighters (username, wins, losses, draws)
//       VALUES ($1, $2, $3, $4)`,[user, win, loss, draw]);
    
//     } 

//     catch (error) {
//       res.status(500).send(error);
//     }

//   }

//   try {

//     const firstUserCount = await countStars(firstUser);
//     const secondUserCount = await countStars(secondUser);

//     console.log(firstUserCount,secondUserCount)

//     if (firstUserCount > secondUserCount) {
//       let battleResult : Object = {
//         winner: firstUser,
//         loser: secondUser,
//         draw: false
//       }
//       await saveBattleResults(firstUser,1,0,0);
//       await saveBattleResults(secondUser,0,1,0);
//       return res.status(200).send(battleResult);
//     }


//     else if (firstUserCount < secondUserCount) {
//       let battleResult : Object = {
//         winner: secondUser,
//         loser: firstUser,
//         draw: false
//       }
//       await saveBattleResults(secondUser,1,0,0);
//       await saveBattleResults(firstUser,0,1,0);
//       return res.status(200).send(battleResult);
//     }

//     else {
//       let battleResult : Object = {
//         winner: null,
//         loser: null,
//         draw: true
//       }
//       await saveBattleResults(secondUser,0,0,1);
//       await saveBattleResults(firstUser,0,0,1);
//       return res.status(200).send(battleResult);
//     }
//   } 
//   catch (error) {
//     res.status(500).send(error);
//   }
// })

const port = +process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
