var handleExcuteSQL = require('../helper/handle')
var Category = {
    async getAllCategories(){
        var sql = 'select * from category';
        var results = await handleExcuteSQL(sql).catch(function(e){
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async getCategory(id){
        var sql = `select * from category where idcategory='${id}'`;
        var results = await handleExcuteSQL(sql).catch(function(e){
            console.log(e);
        })
        // console.log(results)
        return results;
    }
}

module.exports = Category