const ToDoServices = require("../services/toDo.services")



const createToDo  =async(req,res)=>{
    try {
        
        const newToDo = req.body
        const result = await ToDoServices.createToDo(newToDo)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }

};
const deletetodo = async(req,res)=>{
    try {
        const {id}=req.params;
        const result = await ToDoServices.deletetoDo(id)
        res.status(204).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
const updatestatus = async(req,res)=>{
    try {
        const updateStatus = req.body
        const {id} = req.params;
        const result= await ToDoServices.updateToDo(id,updateStatus)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createToDo, deletetodo, updatestatus
}




