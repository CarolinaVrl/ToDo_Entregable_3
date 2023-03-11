const ToDo = require("../models/toDo.Models")


class ToDoServices{
    static async createToDo(newToDo){
        try {
            const createToDo = await ToDo.create(newToDo)
            return createToDo
        } catch (error) {
            throw error
        }

    }
    static async deletetoDo(id){
        try {
            const eliminatedToDo = await ToDo.destroy({
                where:{id}
            })
            return eliminatedToDo
        } catch (error) {
            throw(error)
        }
    }
    static async updateToDo(id, updateToDo){
        try {
            const update = await ToDo.update(updateToDo,{
                where:{id}
            })
            return update
        } catch (error) {
            throw error
        }
    }
}


module.exports = ToDoServices