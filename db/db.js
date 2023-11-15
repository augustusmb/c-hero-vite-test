import dotenv from 'dotenv'
import pgPromise from 'pg-promise';
dotenv.config()

const pgp = pgPromise({});

const config = {
    connectionString: process.env.REACT_APP_DATABASE_URL,
    max: 30,
    ssl: { rejectUnauthorized: false }
  }


export default pgp(config)