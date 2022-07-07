import { Request, Response } from "express";
import battleServices from "../Services/battleServices.js";

export async function postBattle (req : Request, res : Response) {
    const { firstUser, secondUser }: {firstUser: string, secondUser: string} = req.body;

  try {

    const firstUserCount : number = await battleServices.countStars(firstUser);
    const secondUserCount : number = await battleServices.countStars(secondUser);

    console.log(firstUserCount,secondUserCount)

    const battleResult = await battleServices.checkBattleResults(firstUserCount, secondUserCount, firstUser, secondUser);
    
    return res.status(200).send(battleResult);
    
  } 
  catch (error) {
    res.status(500).send(error);
  }
}