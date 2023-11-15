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
  let fullPath = path.join(__dirname, '../db/queries/customers/', file);

  if (environment === 'production') {
    fullPath = path.join(__dirname, '../db/queries/customers/', file);
  }
  return new QueryFile(fullPath, {minify: true});
}

const queries = {
  insertCustomer: sql('addCustomer.sql'),
};

export function addCustomer(req, res) {
  const { BusinessName, Address, Address2, City, State, Province, LargeLogo, SmallLogo, Zip, BranchType, Vessels, Equipment } = req.body.customerData
  db.query(queries.addCustomer, { LargeLogo, SmallLogo, BusinessName, Address, Address2, City, State, Province, Zip, BranchType, Vessels, Equipment })
  .then(res => console.log('Success adding customer'))
  .catch(err => console.log('Error: ', err))
}
