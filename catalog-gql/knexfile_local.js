module.exports = {
  development: {
    client: 'pg',
    connection: `${process.env.POSTGRES_DATABASE_URL}`,
    migration: {
      directory: __dirname + '/migrations_local',
    },
    seeds: {
      directory: __dirname + '/seeds_local',
    },
  },
};
