import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cors from "cors"
import { privateRoute, publicRoute } from "./api/http/routes/default";


const app=express();

app.use(express.json());

app.use(cors());

app.use("/",publicRoute);

//ADD Midleware

app.use("/api",privateRoute);

export {app}