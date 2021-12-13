module.exports = [
   {
      "type": "mysql",
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "synchronize": true,
      "logging": false,
      "dropSchema": false,
      "entities": [
         "src/entities/**/*.ts"
      ],
      "migrations": [
         "database/migrations/**/*.ts"
      ],
      "subscribers": [
         "src/subscribers/**/*.ts"
      ],
      "seeds": [
         "database/seeders/**/*.ts"
      ],
      "cli": {
         "entitiesDir": "src/entities",
         "migrationsDir": "database/migrations",
         "subscribersDir": "src/subscribers"
      }
   },
   {
      "name": "seed",
      "type": "mysql",
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "synchronize": true,
      "logging": false,
      "dropSchema": false,
      "migrationsTableName": "seeders",
      "entities": [
         "src/entities/**/*.ts"
      ],
      "migrations": [
         "database/seeders/**/*.ts"
      ],
      "subscribers": [
         "src/subscribers/**/*.ts"
      ],
      "cli": {
         "entitiesDir": "src/entities",
         "migrationsDir": "database/seeders",
         "subscribersDir": "src/subscribers"
      }
   }
]