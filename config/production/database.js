module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'spmglobaltech.postgres.database.azure.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'spmglobaltech'),
      user: env('DATABASE_USERNAME', 'sqladmin@spmglobaltech'),
      password: env('DATABASE_PASSWORD', '0!AHW@9Z58u3'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
  },
});