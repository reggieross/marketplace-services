// eslint-disable-next-line @typescript-eslint/no-var-requires
const typeOrm = require('typeorm');

class PKNamingStrategy extends typeOrm.DefaultNamingStrategy {
  primaryKeyName(tableOrName, columnNames) {
    const table =
      tableOrName instanceof typeOrm.Table ? tableOrName.name : tableOrName;
    const columnsSnakeCase = columnNames.join('_');

    return `${table}_${columnsSnakeCase}_pk`;
  }
}

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'integration-test-user',
  password: process.env.DB_PASSWORD || 'passw0rd',
  database: process.env.DB_NAME || 'MarketplaceCatalog',
  schema: process.env.DB_SCHEMA || 'public',
  schemaName: process.env.DB_SCHEMA || 'public',
  entities: ['build/**/models/*.js'],
  migrationsTableName: 'migrations',
  migrations: ['build/**/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  sync: true,
  namingStrategies: new PKNamingStrategy(),
};
