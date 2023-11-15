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




/**  This is an example basic db query  **/
// db.query('SELECT * FROM users')
//   .then(data => {

//   })
//   .catch(err => {
//   })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// if (import.meta.env.VITE_NODE_ENV === "production") {
//   app.use(express.static("dist"));
// } else {
//   app.use(express.static(path.join(__dirname, 'public')));
// }

app.use('/routes', router)

app.get('/test', (req, res) => {
  db.query('select * from users')
  .then(res => {
    console.log(res)
  })
  // console.log(req)
  console.log('test')
  // console.log(req.query)
  res.send('hello')
})

// app.post('/testRoute', (req, res) => {
//   console.log('The test endpoint has been reached. Congratulations')
//   console.log('Request here ' + req.body)
//   res.send('Good Job')
// })

if (env.VITE_NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.get('/', (req, res) => {
  console.log("Hello")

  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log('listening on port: ', port)
})