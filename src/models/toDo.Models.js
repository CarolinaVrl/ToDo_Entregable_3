const {DataTypes} = require('sequelize')
const db = require('../utils/database')



const ToDo = db.define('todo',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false

    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"pendiente"
    },
    authorId:{
        type:DataTypes.INTEGER,
        field:'author_id',
        allowNull:false

    },
    categoryId:{
        type:DataTypes.INTEGER,
        field:'category_id',
        allowNull:false
    }
},{
    timestamps:false
});

module.exports = ToDo;