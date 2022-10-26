function registerHbs(hbs) {

    hbs.registerHelper("desc", function (text) {
        return new hbs.SafeString(text);
    });

    hbs.registerHelper("priceTimeQuantity", function (price, quantity) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number.parseFloat(price) * Number.parseInt(quantity));
    });

    hbs.registerHelper("priceToMoney", function (price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    });

    hbs.registerHelper("total", function (cart, coupon) {
        var percent = 0.0
        if (coupon) {
            percent = Number.parseFloat(coupon)
        }
        var total = 0;
        cart.forEach(element => {
            total += Number.parseFloat(element.price) * Number.parseInt(element.quantity);
        });
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total - percent * total);
    });
    hbs.registerHelper("discountFormat", function (cart, coupon) {
        var percent = 0.0
        if (coupon) {
            percent = Number.parseFloat(coupon)
        }
        var total = 0;
        cart.forEach(element => {
            total += Number.parseFloat(element.price) * Number.parseInt(element.quantity);
        });
        return "-" + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(percent * total);
    });


    hbs.registerHelper("isInfoPage", function (page) {
        return page == 2;
    });

    hbs.registerHelper("isOrderPage", function (page) {
        return page == 3;
    });


    hbs.registerHelper("getDate", function (date) {
        var newDate = new Date(date)
        return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
    });

    hbs.registerHelper("parseInt", function (number) {
        return Number.parseFloat(number);
    });

    hbs.registerHelper("percentDiscount", function (number) {
        return '-' + Number.parseFloat(number) * 100 + '%';
    });


}
module.exports = registerHbs