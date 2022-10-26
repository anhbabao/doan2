var handleExcuteSQL = require('../helper/handle')
var Cart = {
    async addItem(username, book){
        var sql = `insert into cart (username,idbook,quantity) VALUES ('${username}', '${book.id}', '${book.quantity}')`;
        var results = await handleExcuteSQL(sql).catch(function(e){
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async find(username, idbook){
        var sql = `select * from cart where cart.idbook='${idbook}' and cart.username='${username}'`;
        var results = await handleExcuteSQL(sql).catch(function(e){
            console.log(e);
        })
        
        return results.length!=0;
    },
    async deleteItem(username, idbook){
        var sql = `DELETE FROM cart WHERE cart.username = '${username}' AND cart.idbook = '${idbook}'`;
        var results = await handleExcuteSQL(sql).catch(function(e){
            console.log(e);
        })
        
        return results;
    },
    async getCart(username){
        var sql = `SELECT * FROM cart, user, book 
        WHERE cart.idbook=book.idbook AND
            cart.username=user.username and
            cart.username='${username}';`;
        var results = await handleExcuteSQL(sql).catch(function(e){
            console.log(e);
        })

        results.forEach(element => {
            element.priceFormat = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        // console.log(results)
        return results;
    },
    
}

module.exports = Cart