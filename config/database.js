
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'ec2-52-48-159-67.eu-west-1.compute.amazonaws.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'dbtn6shd4j5opr'),
//       user: env('DATABASE_USERNAME', 'uajbchhyhbxuyl'),
//       password: env('DATABASE_PASSWORD', '35d3c31cd9f00a9639c9e77e6d09971bd02aa242506cb6b2bc6186d778e677f8'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

const parse = require('pg-connection-string').parse;
const config = parse('postgres://uajbchhyhbxuyl:35d3c31cd9f00a9639c9e77e6d09971bd02aa242506cb6b2bc6186d778e677f8@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/dbtn6shd4j5opr');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});


