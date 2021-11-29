module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    searchPath: ['public'],
    migration: {
      directory: __dirname + `/migrations`,
    },
    seeds: {
      directory: __dirname + `/seeds`,
    },
  },
};
