import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      port: parseInt(process.env.DB_PORT, 10),
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      connection: process.env.DB_CONNECTION,
    },
  };
});
