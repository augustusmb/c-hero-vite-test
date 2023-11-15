import db from '../../db/db.js';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config()

const QueryFile = db.$config.pgp.QueryFile;
const __dirname = path.resolve();
const environment = import.meta.env.VITE_NODE_ENV


const sql = (file) => {
  let fullPath = path.join(__dirname, '../db/queries/vessels/', file)
  
  if (environment === 'production') {
    fullPath = path.join(__dirname, '../db/queries/vessels/', file);
  }
  return new QueryFile(fullPath, {minify: true});
}

const queries = {
  getVessels: sql('getVessels.sql')
};

export function getVessels(req, res) {
  db.query(queries.getVessels)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => console.log('Error during get request to select list of all vessels: ', err))
}