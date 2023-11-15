import dotenv from 'dotenv'
import pgPromise from 'pg-promise';
import { defineConfig, loadEnv } from 'vite';
dotenv.config()

const env = loadEnv(
  'all',
  process.cwd()
);
  
  const pgp = pgPromise({});

const config = {
    connectionString: env.VITE_DATABASE_URL,
    max: 30,
    ssl: { rejectUnauthorized: false }
  }


export default pgp(config)