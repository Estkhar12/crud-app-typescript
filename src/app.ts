import express, { Express, Request, Response } from "express";
import productRoute from "../src/routes/product"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const app: Express = express();


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;


db.once("open", () => {
  console.log("Database connection is successfull");
});



const port = process.env.PORT || 3000;

app.use("/", productRoute)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});