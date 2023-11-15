import dotenv from 'dotenv';
import router from './routes.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import db from '../db/db.js'
import express from 'express';
dotenv.config()
const __dirname = path.resolve();

import { defineConfig, loadEnv } from 'vite';

const env = loadEnv(
  'all',
  process.cwd()
);

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));
const port = env.PORT || 8080

app.use('/routes', router)

if (env.VITE_NODE_ENV === "production") {
  app.use(express.static("public"));
}

app.get('/', (req, res) => {
  console.log("Hello")
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log('listening on port: ', port)
})