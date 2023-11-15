import dotenv from 'dotenv'
import pgPromise from 'pg-promise';
dotenv.config()

const pgp = pgPromise({});

const databaseURL = import.meta.env.VITE_DATABASE_URL

const config = {
    connectionString: databaseURL,
    max: 30,
    ssl: { rejectUnauthorized: false }
  }


export default pgp(config)