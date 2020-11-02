module.exports = {


    "type": "postgres",
    "url": process.env.DATABASE_URL,

    "entities": ["dist/entity/*.js"],
    "migrations": ["dist/database/migration/*.js"],
    "cli": {
        "migrationsDir": "src/database/migration"
    }
}