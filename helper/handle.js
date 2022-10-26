var db = require('../config/db')
var handleExcuteSQL = function(sql){
    return new Promise(function(resolve, reject){

        db.conn.query(sql, function (err, results) {
            if (err) reject(err.message);
            // console.log(results);
            resolve(results)
        })
    })
}
module.exports = handleExcuteSQL