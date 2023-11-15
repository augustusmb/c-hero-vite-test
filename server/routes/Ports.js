import db from '../../db/db.js';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config()

import { defineConfig, loadEnv } from 'vite';

const env = loadEnv(
  'all',
  process.cwd()
);

const QueryFile = db.$config.pgp.QueryFile;
const __dirname = path.resolve();
const environment = env.VITE_NODE_ENV


const sql = (file) => {
  let fullPath = path.join(__dirname, '../db/queries/ports/', file)
  
  if (environment === 'production') {
    fullPath = path.join(__dirname, '../db/queries/ports/', file);
  }
  return new QueryFile(fullPath, {minify: true});
}

const queries = {
  getPorts: sql('getPorts.sql')
};

export function getPorts(req, res) {
  db.query(queries.getPorts)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => console.log('Error during get request to select list of all companies: ', err))
}