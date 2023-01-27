import express from "express";
import { Application } from "express";
import bodyParser from "body-parser";
import { errorHandler, getAllMilkProducts } from "./controllers/controller";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("db"));

app.get("/api/milk", getAllMilkProducts);

app.use(errorHandler);

export default app;
