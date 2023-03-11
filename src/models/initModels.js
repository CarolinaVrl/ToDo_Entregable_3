const Category = require("./categories.Model");
const ToDo = require("./toDo.Models")
const User = require("./user.Model")



const initmodels = ()=>{
    User.hasMany(ToDo,{foreignKey:'authorId'});

    ToDo.belongsTo(User,{foreignKey:'authorId'});

    Category.hasMany(ToDo,{
        foreignKey:'categoryId'
    })
    
    ToDo.belongsTo(Category,{
        foreignKey:'categoryId'
    })

   
};

module.exports = initmodels