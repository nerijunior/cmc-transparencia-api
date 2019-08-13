import express, { Request, Response } from "express";

const app = express();

app.get("/_health", (req: Request, res: Response): void => {
    res.send({ ping: "pong" });
});

export default app;
