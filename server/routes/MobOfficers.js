import db from '../../db/db.js';
import path from 'path';

import dotenv from 'dotenv';

import { defineConfig, loadEnv } from 'vite';
dotenv.config()

const env = loadEnv(
  'all',
  process.cwd()
);

const QueryFile = db.$config.pgp.QueryFile;
const __dirname = path.resolve();
const environment = env.VITE_NODE_ENV

const sql = (file) => {
  let fullPath = path.join(__dirname, '../db/queries/classes/', file);

  if (environment === 'production') {
    fullPath = path.join(__dirname, '../../db/queries/mobOfficers', file);
  }
  return new QueryFile(fullPath, {minify: true});
}

const queries = {
  addMobOfficer: sql('addMobOfficer.sql'),
};

export function addMobOfficer(req, res) {
  const { Name, Phone, Email, Title } = req.body.customerData

  db.none(queries.addMobOfficer, { Name, Phone, Email, Title })
  .then(res => {
    console.log('Success adding Mob Officer')
  })
  .catch(err => console.log('Error: ', err))
}