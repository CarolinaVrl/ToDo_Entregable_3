const {Sequelize} = require('sequelize')

const db = new Sequelize({
    database:'todo_entregable_3',
    host:'localhost',
    port:5432,
    
    username:'postgres',
    password:'Root',
    dialect:'postgres'
});

module.exports = db;