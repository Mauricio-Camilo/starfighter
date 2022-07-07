import { Router } from "express";
import { postBattle } from "../Controllers/battleController.js";

const battleRouter = Router();

battleRouter.use("/battle", postBattle);

export default battleRouter;