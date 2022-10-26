var express = require('express');
const Order = require('../models/order');
const User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var error = false
  var user = null;
  if (!req.session.User)
    error = true
  else {
    user = req.session.User
  }
  res.render('profile', { error, user, page: 1 })
});


/* GET users listing. */
router.get('/info', function (req, res, next) {
  var error = false
  var user = null;
  if (!req.session.User)
    error = true
  else {
    user = req.session.User
  }
  res.render('profile', { error, user, page: 2 })
});

/* GET users listing. */
router.get('/orders', async function (req, res, next) {
  var error = false
  var user = null;
  var orders = null;
  if (!req.session.User)
    error = true
  else {
    user = req.session.User
    orders = await Order.getOrders(user.username)
    console.log(user.username)
  }
  res.render('profile', { error, user, page: 3, orders })
});
module.exports = router;
