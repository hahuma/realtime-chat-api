import http from "http";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const app = http.createServer((req, res) => {
  res.end("working!");
});

export { app };
