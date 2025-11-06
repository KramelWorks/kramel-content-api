import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cors from "cors"
import { privateRoute } from "./api/http/routes/private.route";
import { publicRoute } from "./api/http/routes/public.route";

const app=express();

app.use(express.json());

app.use(cors());

app.use(publicRoute);

//ADD Midleware

app.use(privateRoute);

export {app}