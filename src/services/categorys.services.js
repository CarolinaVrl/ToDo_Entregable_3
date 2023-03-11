const Category = require("../models/categories.Model")



class CategoryServices {
    static async getAllcategorys(){
        try {
            const allCategorys = await Category.findAll()
            return allCategorys
        } catch (error) {
            throw error
        }
    }
    static async CreateCategory(newCategory){
        try {
            const newCategor = await Category.create(newCategory)
            return newCategor
        } catch (error) {
            throw error
        }
    }
    static async deleteCategory(id){
        try {
            const elimatedCategory = await Category.destroy({
                where:{id}
            })
            return elimatedCategory
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoryServices