import express, { Application, Request, Response } from "express";
import { routes } from "./app/controller/book.controller";

const app: Application = express();
app.use(express.json());
app.use("/routes", routes);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library management.");
});
export default app;
