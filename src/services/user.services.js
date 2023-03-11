const Category = require("../models/categories.Model");
const ToDo = require("../models/toDo.Models");
const User = require("../models/user.Model")

class UserServices {
    static async createUser(newUser) {
        try {
            const user = await User.create(newUser);
            return user
        } catch (error) {
            throw (error)

        }
    }
    static async getAllUsers() {
        try {
            const allUsers = await User.findAll();
            return allUsers
        } catch (error) {
            throw (error)

        }

    }
    static async toDoUser(id) {
        try {
            const allToDoUsers = await User.findByPk(id,
                {
                    include:  
                        {
                        model: ToDo,
                        attributes:["title","status"],
                        include:{
                            model: Category,
                            attributes:["name"]
                        }
                    } 
                   
                })
            return allToDoUsers
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices
