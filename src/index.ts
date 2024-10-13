import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const myLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} METHOD: ${req.method} URL: ${req.url} Body: ${JSON.stringify(req.body)}`);
  next();
}

app.use(myLogger)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server test");
});

app.use("/users", usersRouter);

app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});