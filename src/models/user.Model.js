const {DataTypes, Sequelize} = require('sequelize');
const db = require('../utils/database');



const User = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        unique:true,
        allowNull:false,
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    timestamps:false
});

module.exports = User