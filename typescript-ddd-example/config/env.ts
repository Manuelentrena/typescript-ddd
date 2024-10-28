import * as dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

// Validar que todas las variables de entorno estén definidas
if (
  !DATABASE_HOST ||
  !DATABASE_PORT ||
  !DATABASE_USER ||
  !DATABASE_PASSWORD ||
  !DATABASE_NAME
) {
  throw new Error('Missing database configuration in environment variables');
}
// Codificar el username y el password para la URL
const username = encodeURIComponent(DATABASE_USER);
const password = encodeURIComponent(DATABASE_PASSWORD);

// Construir la DATABASE_URL
export const databaseURL = `postgres://${username}:${password}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
export const databaseURLExt = `postgres://${username}:${password}@localhost:${DATABASE_PORT}/${DATABASE_NAME}`;

// Exportar la configuración
export const config = {
  url: databaseURL,
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT, 10),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
};
