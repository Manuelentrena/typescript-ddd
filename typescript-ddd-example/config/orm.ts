import { defineConfig, type Config } from 'drizzle-kit';
import { databaseURLExt } from './env';

export default defineConfig({
  schema: './database/schemas.ts',
  out: './database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseURLExt,
  },
  migrations: {
    table: 'migrations',
    schema: 'public',
  },
  verbose: true,
  strict: true,
} satisfies Config);
