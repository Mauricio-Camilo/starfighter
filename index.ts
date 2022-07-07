import express, { Request, Response } from "express";
import axios from "axios";
import db from "./config/database.js";

const app = express();
app.use(express.json());

app.post("/battle", async (req : Request, res : Response) => {

  const { firstUser, secondUser }: {firstUser: string, secondUser: string} = req.body;

  async function countStars (user : string) {
    try {
      const userData = await axios.get(`https://api.github.com/users/${user}/repos`);

      let userCount = 0;
  
      userData.data.forEach((element : any)=> {
        userCount += element.stargazers_count;
      });
  
      return userCount;
      
    } 
    catch (error) {
      res.status(500).send(error);
    }
  }

  async function saveBattleResults (user : string, win : number, loss : number , draw: number) {
    try {
       await db.query(`
      INSERT INTO fighters (username, wins, losses, draws)
      VALUES ($1, $2, $3, $4)`,[user, win, loss, draw]);
    
    } 

    catch (error) {
      res.status(500).send(error);
    }

  }

  try {

    const firstUserCount = await countStars(firstUser);
    const secondUserCount = await countStars(secondUser);

    console.log(firstUserCount,secondUserCount)

    if (firstUserCount > secondUserCount) {
      let battleResult : Object = {
        winner: firstUser,
        loser: secondUser,
        draw: false
      }
      await saveBattleResults(firstUser,1,0,0);
      await saveBattleResults(secondUser,0,1,0);
    }

    res.status(200).send("Ok");

  } catch (error) {
    res.status(500).send(error);
  }

})

const port = +process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
