import { Environment } from './types';

//TODO Switch to point at the env file
export const ENV = {
  RUN_PORT: process.env.PORT || '5000',
  ENVIRONMENT: (process.env.ENVIRONMENT as Environment) || 'local',
  POSTGRES_DATABASE_URL:
    process.env.POSTGRES_DATABASE_URL ||
    `postgres://${process.env.POSTGRES_DATABASE_USER}:${process.env.POSTGRES_DATABASE_PW}@${process.env.POSTGRES_DATABASE_HOST_DEV}/catalog`,
  AUTHENTICATION_HOST: process.env.AUTHENTICATION_HOST,
};
