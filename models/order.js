var handleExcuteSQL = require('../helper/handle')
var Order = {
    async getOrders(username) {
        var sql = `select * from orders where orders.username='${username}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async getStatusOrder(id) {
        var sql = `select idorder, status from orders where orders.idorder='${id}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async updateOrder(order) {
        var sql = `UPDATE orders SET status = '${order.status}'  WHERE orders.idorder = '${order.idorder}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async getAllOrder() {
        var sql = `select * from orders`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        // console.log(results)
        return results;
    },
    async newOrder(username, data) {

        var date = new Date();
        var stringDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        var discount = 'null'
        if (data.discount) {
            discount = `'${data.discount}'`
        }
        var sql = `INSERT INTO orders (idorder, username,purchasedate,deliverydate,status,discount) VALUES ('${data.id}', '${username}', '${stringDate}', '${stringDate}', 'Chờ xác nhận', ${discount});`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })

        //Add each item in data

        data.cart.forEach(async item => {
            var sql = `INSERT INTO orderdetail (idorder, idbook, quantity) VALUES ('${data.id}', '${item.idbook}', '${item.quantity}');`;
            await handleExcuteSQL(sql).catch(function (e) {
                console.log(e);
            })
        });
        return results;

    },
    async getOrder(idOrder) {
        var sql = `SELECT * FROM orders, orderdetail, book WHERE orders.idorder=orderdetail.idorder AND orderdetail.idbook = book.idbook AND orders.idorder='${idOrder}';`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        results.forEach(element => {
            element.priceFormat = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price)
        });
        return results;
    },
    async getAllTotal() {
        var sql = `SELECT sum(book.price * orderdetail.quantity) as total FROM orders, orderdetail,book WHERE orders.discount is null and orders.idorder=orderdetail.idorder AND orderdetail.idbook = book.idbook;`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        var t1 = results[0].total;

        var sql1 = `SELECT SUM(book.price * orderdetail.quantity - book.price * orderdetail.quantity*coupon.percent) as total FROM orders, orderdetail, coupon,book WHERE orders.idorder=orderdetail.idorder AND orders.discount = coupon.code AND orderdetail.idbook = book.idbook;`
        var results1 = await handleExcuteSQL(sql1).catch(function (e) {
            console.log(e);
        })
        var t2 = Number.parseInt(results1[0].total);
        return t1 + t2;
    },
    async getOrdersWithTotal() {
        var sql = `SELECT orders.idorder,orders.username, orders.status, SUM(book.price * orderdetail.quantity - book.price *orderdetail.quantity * coupon.percent) as total FROM orders, orderdetail, coupon,book WHERE orders.idorder=orderdetail.idorder AND orders.discount = coupon.code AND orderdetail.idbook = book.idbook GROUP BY orders.idorder UNION SELECT orders.idorder,orders.username, orders.status, SUM(book.price * orderdetail.quantity) as total FROM orders, orderdetail,book WHERE orders.idorder=orderdetail.idorder AND orderdetail.idbook = book.idbook AND orders.discount is null GROUP BY orders.idorder;`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        return results;
    },


}

module.exports = Order