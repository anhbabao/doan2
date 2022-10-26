var handleExcuteSQL = require('../helper/handle')
var Book = {
    async getAllBooks() {
        var sql = 'select *,book.name as namebook, category.name as category  from book, category where book.idcategory=category.idcategory';
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        results.forEach(element => {
            element.price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        // console.log(results)
        return results;
    },
    async find(name) {
        var sql = `select * from book where name like '%${name}%'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        results.forEach(element => {
            element.price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        // console.log(results)
        return results;
    },
    async getAllBooksWithoutCateGory() {
        var sql = 'select * from book';
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        results.forEach(element => {
            element.price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        // console.log(results)
        return results;
    },
    async getCategoryBooks(id) {
        var sql = `select * from book where idcategory='${id}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        results.forEach(element => {
            element.price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        // console.log(results)
        return results;
    },
    async getBook(id) {
        var sql = `select * from book where idbook='${id}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        results.forEach(element => {
            element.priceFormat = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        // console.log(results)
        return results[0];
    },
    async insertBook(book) {
        var sql = `INSERT INTO book (idbook, name, author, publishdate, idcategory, price, status, imgurl, description, number) VALUES ('${book.idbook}', '${book.name}', '${book.author}', '${book.publishdate}', '${book.idcategory}', '${book.price}', '${book.status}', '${book.imgurl}', '${book.description}', '${book.number}');`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })

        return results;
    },
    async updateBook(book) {
        var sql = `UPDATE book SET name = '${book.name}', author = '${book.author}', description = '${book.description}', idcategory = '${book.idcategory}', imgurl = '${book.imgurl}', number = '${book.number}', publishdate = '${book.publishdate}', price = '${book.price}', status = '${book.status}' WHERE book.idbook = '${book.idbook}';`;

        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        console.log(results)

        return results;
    }
}

module.exports = Book