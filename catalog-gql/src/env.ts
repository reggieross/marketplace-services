import { Environment } from './types';

//TODO Switch to point at the env file
export const ENV = {
  RUN_PORT: process.env.PORT || '5000',
  ENVIRONMENT: (process.env.ENVIRONMENT as Environment) || 'local',
  POSTGRES_DATABASE_USER: process.env.POSTGRES_DATABASE_USER || '',
  POSTGRES_DATABASE_PW: process.env.POSTGRES_DATABASE_PW || '',
  POSTGRES_DATABASE_HOST: process.env.POSTGRES_DATABASE_HOST || '',
  POSTGRES_DATABASE_PORT: process.env.POSTGRES_DATABASE_PORT || '5432',
  DB_NAME: 'MarketplaceCatalog',
  AUTHENTICATION_HOST: process.env.AUTHENTICATION_HOST,
};
