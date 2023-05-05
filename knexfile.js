module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './db.sqlite'
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      },
      useNullAsDefault: true
    }
  };
  