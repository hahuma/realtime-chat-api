import { app } from "./app";
import { SERVER_CONSTS } from "./shared/consts";

const { HOST, PORT } = SERVER_CONSTS;

if (!HOST || !PORT) {
  console.error("Server enviroment variables are not defined");
}

app.listen(PORT, HOST, () =>
  console.log(`Server running on http://${HOST}:${PORT}`)
);
