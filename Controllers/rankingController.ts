import { Request, Response } from "express";
import rankingRepository from "../Repositories/rankingRepository.js";

export async function getRanking (req : Request, res : Response) {

  try {
    const rankingResults = await rankingRepository.getRanking();
    res.status(200).send({fighters: rankingResults.rows});
  } 

  catch (error) {
    res.status(500).send(error);
  }
}