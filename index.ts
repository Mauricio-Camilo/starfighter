import express, { Request, Response } from "express";
import axios from "axios";
import db from "./config/database.js";
import router from "./Routers/index.js";

const app = express();
app.use(express.json());

app.use(router);

const port = +process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
