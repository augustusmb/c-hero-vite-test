import dotenv from 'dotenv'
import pgPromise from 'pg-promise';
dotenv.config()

const pgp = pgPromise({});

const config = {
    connectionString: import.meta.env.VITE_DATABASE_URL,
    max: 30,
    ssl: { rejectUnauthorized: false }
  }


export default pgp(config)