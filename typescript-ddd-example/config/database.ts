import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from 'pg';
import { config } from './env';

const pool = new Pool({
  host: config.host,
  port: config.port,
  user: config.username,
  password: config.password,
  database: config.database,
});

export const db = drizzle({ client: pool });