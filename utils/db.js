const pgp = require('pg-promise')();

const connection = {
    host: process.env.host,
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: process.env.password,
};

const db = pgp(connection);

module.exports = db;