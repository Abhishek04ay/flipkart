import express from "express";
import dotenv from "dotenv";

import Connection from "./database/db";
import DefaultData from "./deafult.js";

dotenv.config()

const app = express();

const PORT = 8000;

const username=  process.env.DB_USERNAME;
const password= process .env.DB_PASSWORD;

Connection(username , password);

app.listen(PORT, () =>
    console.log('Server is successfully running on PORT ${PORT}')
  );


DefaultData();


