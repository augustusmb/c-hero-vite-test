import db from '../../db/db.js';
import path from 'path';

const QueryFile = db.$config.pgp.QueryFile;
const __dirname = path.resolve();
const environment = import.meta.env.VITE_NODE_ENV

const sql = (file) => {
  let fullPath = path.join(__dirname, '../db/queries/classes/', file);

  if (environment === 'production') {
    fullPath = path.join(__dirname, '../db/queries/classes/', file);
  }
  return new QueryFile(fullPath, {minify: true});
}

const queries = {
  getUsersAssignedClasses: sql('getUsersAssignedClasses.sql')
};

export function getUsersAssignedClasses(req, res) {
  let userId = req.query.id
  db.any(queries.getUsersAssignedClasses, { userId })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => console.log('Error retrieving user\'s classes', err))
}