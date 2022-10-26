const md5 = require('md5');
var handleExcuteSQL = require('../helper/handle')
var User = {
    async getAll() {
        var sql = `select * from user`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async validateLogin(username) {
        var sql = `select * from user where username='${username}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })

        // console.log(results)
        return results[0];
    },
    async register(data) {
        var password = md5(data.password)
        var sql = `INSERT INTO user (username, name, password, address, phone) VALUES ('${data.username}','${data.name}','${password}','${data.address}','${data.phone}')`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })

        // console.log(results)
        return results;
    },


}

module.exports = User