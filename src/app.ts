import http from "node:http";
import dotenv from "dotenv";
import { SERVER_CONSTS } from "./shared/consts";
import { HttpMethods } from "./shared/enums/httpMethods";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const makeUrl = (url: string) => new URL(url);

const app = http.createServer((req, res) => {
  console.log(req);

  if (!req.url || !req.method) {
    res.statusCode = 400;
    res.end("Invalid request");
    return;
  }

  const url = makeUrl(req.url);

  if (req.method === HttpMethods.POST && req.url) res.end("working!");
});

export { app };
