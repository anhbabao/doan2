var express = require('express');
var router = express.Router();
var db = require('../lib/db');
const Book = require('../models/book');
const Cart = require('../models/cart');
const Category = require('../models/category');
const Coupon = require('../models/coupon');
const Order = require('../models/order');

/* GET home page. */
router.get('/', async function (req, res, next) {

    var error = false
    var cart = null
    var user = null
    if (!req.session.User)
        error = true
    else {
        user = req.session.User
        cart = await Cart.getCart(req.session.User.username)
    }
    res.render('cart', { error, cart, user })

});



/* GET login page. */
router.post('/', async function (req, res, next) {
    console.log(req.body)

    var error = false
    if (!req.session.User)
        error = true
    else {
        var idbook = req.body.id;
        var username = req.session.User.username;
        if (Cart.find(username, idbook))
            Cart.deleteItem(username, idbook)
        Cart.addItem(username, req.body)
    }
    res.redirect('/cart')
});
router.post('/delete', async function (req, res, next) {
    console.log("delete: ", req.body)

    var error = false
    if (!req.session.User)
        error = true
    else {
        var idbook = req.body.id;
        var username = req.session.User.username;
        if (Cart.find(username, idbook))
            Cart.deleteItem(username, idbook)
    }
    res.redirect('/cart')
});

router.post('/coupon', async function (req, res, next) {
    console.log("coupon: ", req.body)

    var error = false
    var cart = null
    var coupon = null
    var code = null
    if (!req.session.User)
        error = true
    else {
        cart = await Cart.getCart(req.session.User.username)
        code = req.body.code
        var coupon = await Coupon.find(code)
    }
    res.render('cart', { error, cart, coupon, code })
});


module.exports = router;

