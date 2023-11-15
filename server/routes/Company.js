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
  let fullPath = path.join(__dirname, '../db/queries/company/', file)
  
  if (environment === 'production') {
    fullPath = path.join(__dirname, '../db/queries/company/', file);
  }
  return new QueryFile(fullPath, {minify: true});
}

const queries = {
  getCompanies: sql('getCompanies.sql'),
  insertCompany: sql('insertCompany.sql'),
  getCompanyByName: sql('getCompanyByName.sql')
};

export function getCompanies(req, res) {
  db.query(queries.getCompanies)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => console.log('Error during get request to select list of all companies: ', err))
}

export function getCompanyByName(req, res) {
  const { company } = req.query
  db.query(queries.getCompanyByName, { company })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => console.log('Error during get request to select a single company by name: ', err))
}

export function insertCompany(req, res) {
  const { company } = req.body
  db.query(queries.insertCompany, { company })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => console.log('Error during post request to insert company: ', err))
}