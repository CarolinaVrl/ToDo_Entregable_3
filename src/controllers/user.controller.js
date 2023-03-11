const UserServices = require("../services/user.services");



const createUser = async(req,res)=>{
    try {
        const newUser = req.body;
        const result = await UserServices.createUser(newUser)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getAllUsers = async(req,res)=>{
    try {
        const result = await UserServices.getAllUsers()
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
const allTodoHasUser = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await UserServices.toDoUser(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    createUser,getAllUsers,allTodoHasUser
}