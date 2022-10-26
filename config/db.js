var mysql = require('mysql');
var db = {
    conn:
        mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "nbook"
        }),
    getBooks: function() {
        var sql = "SELECT * FROM book";
        this.conn.query(sql, function (err, results) {
            if (err) throw err;
            console.log(results);
        })
    }
}
module.exports = db