// IMPORTS
import 'dotenv/config'
import loaders from "./loaders";
import express from "express";
import routes from "./routes";

// CONFIGS
loaders()
const app = express();
const PORT = process.env.PORT;

app.use(routes);

// LISTENING
app.listen(PORT, () => {
  console.log(`Server çalışıyor | http://localhost:${PORT}`);
});
