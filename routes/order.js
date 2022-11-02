var express = require('express');
var uniqid = require('uniqid');
var router = express.Router();
var db = require('../lib/db');
const Book = require('../models/book');
const Cart = require('../models/cart');
const Category = require('../models/category');
const Coupon = require('../models/coupon');
const Order = require('../models/order');

/* GET home page. */
router.get('/:id', async function (req, res, next) {

    console.log(req.params.id)
    var error = false
    var user = null
    var order = null
    var discount = {}
    if (!req.session.User)
        error = true
    else {
        user = req.session.User
        order = await Order.getOrder(req.params.id)
        console.log(order)
        discount = {
            code: order[0].discount,
            percent: false
        }
        if (discount.code !== 'null') {
            discount.percent = await Coupon.find(discount.code)
        }
        console.log(discount)
        res.render('order', { error, user, status: false, order, discount })

    }
});



/* GET login page. */
router.post('/', async function (req, res, next) {
    console.log(req.body)

    var error = false
    if (!req.session.User)
        error = true
    else {
        var cart = await Cart.getCart(req.session.User.username)
        var data = {
            id: uniqid(),
            cart,
            discount: req.body.discount === 'NULL' ? null : req.body.discount
        }
        console.log(data)
        console.log(await Order.newOrder(req.session.User.username, data))
    }
    res.render('order', { error, status: true })
});





module.exports = router;