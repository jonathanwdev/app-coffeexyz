require('dotenv/config');

module.exports = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [
    "./src/infra/typeorm/migrations/*.ts"
  ],
  entities: [
    "./src/infra/typeorm/entities/*.ts"
  ],
  cli: {
    migrationsDir: "./src/infra/typeorm/migrations",
    entitiesDir: "./src/infra/typeorm/entities"
  }
}
