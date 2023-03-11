const CategoryServices = require("../services/categorys.services")


const getAllcategorys=async(req,res)=>{
    try {
        const result = await CategoryServices.getAllcategorys()
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }

}
const createCategory = async(req,res)=>{
    try {
        const newCategory = req.body
        const result = await CategoryServices.CreateCategory(newCategory)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
const deleteCategory = async(req,res)=>{
    try {
        const {id}= req.params
        const result = await CategoryServices.deleteCategory(id)
        res.status(204).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    getAllcategorys,
    createCategory,
    deleteCategory
}