require('dotenv/config');

module.exports = [
  {
    name: 'default',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    migrations: [
      "./src/infra/typeorm/migrations/*.ts"
    ],
    entities: [
      "./src/infra/typeorm/entities/*.ts"
    ],
    cli: {
      migrationsDir: "./src/infra/typeorm/migrations",
    }
  }
];
