import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

let objectConfig = {connectionString: process.env.DATABASE_URL};

const db = new Pool(objectConfig);

export default db;

