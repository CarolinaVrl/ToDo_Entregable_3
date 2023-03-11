const {DataTypes} = require('sequelize');
const db = require('../utils/database');



const Category = db.define('categorys',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    timestamps:false
});

module.exports = Category