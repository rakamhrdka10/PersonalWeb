//database.js

import { Sequelize } from "sequelize";

const db = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'db',
    dialect: 'postgres', 
    logging: false,
});

export default db;