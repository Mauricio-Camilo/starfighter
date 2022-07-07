import { Router } from "express";
import { getRanking } from "../Controllers/rankingController.js";

const rankingRouter = Router();

rankingRouter.use("/ranking", getRanking);

export default rankingRouter;