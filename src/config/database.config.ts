import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config(); // 👈 This loads your .env file


export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'community_db',
});

pool.on('error', (err:Error) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
