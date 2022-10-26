var handleExcuteSQL = require('../helper/handle')
var Coupon = {
    async find(code) {
        var sql = `select * from coupon where coupon.code='${code}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        if (results.length == 0) {
            return false
        }

        return results[0].percent;
    },
    async getCoupon(code) {
        var sql = `select * from coupon where coupon.code='${code}'`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        return results;
    },
    async getAll() {
        var sql = `select * from coupon`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })
        if (results.length == 0) {
            return false
        }

        return results;
    },
    async insert(coupon) {
        var sql = `INSERT INTO coupon (code,percent,startday,endday) VALUES ('${coupon.code}', '${coupon.percent}','${coupon.startday}','${coupon.endday}')`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })

        return results;
    },
    async update(coupon) {
        var sql = `UPDATE coupon SET percent = '${coupon.percent}', startday = '${coupon.startday}', endday = '${coupon.endday}'  WHERE coupon.code = '${coupon.code}';`;
        var results = await handleExcuteSQL(sql).catch(function (e) {
            console.log(e);
        })

        return results;
    },

}

module.exports = Coupon