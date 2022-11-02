var express = require('express');
var router = express.Router();
var db = require('../lib/db');
const Book = require('../models/book');
const Coupon = require('../models/coupon');
const Order = require('../models/order');
const User = require('../models/user');

/* GET dashboard page. */
router.get('/', async function (req, res, next) {
  var total = await Order.getAllTotal()
  var products = await Book.getAllBooks()
  var orders = await Order.getOrdersWithTotal()
  console.log(orders)


  res.render('admin/index', { title: 'Dashboard', layout: 'adminLayout', dashboard: true, total, numberProduct: products.length, orders });
});

/* GET product page. */
router.get('/product', async function (req, res, next) {
  var books = await Book.getAllBooks()
  // console.log(books)
  res.render('admin/product', { title: 'Sản phẩm', layout: 'adminLayout', productPage: true, books });
});

router.get('/book/add', async function (req, res, next) {
  var books = await Book.getAllBooks()
  // console.log(books)
  res.render('admin/addbook', { title: 'Sản phẩm', layout: 'adminLayout', productPage: true, books });
});

router.post('/book/add', async function (req, res, next) {
  var book = req.body
  // console.log(book)
  await Book.insertBook(book)
  res.render('admin/addbook', { title: 'Sản phẩm', layout: 'adminLayout', productPage: true, ok: true });
});

router.get('/book/:id', async function (req, res, next) {
  var book = await Book.getBook(req.params.id)
  res.render('admin/updatebook', { title: 'Sản phẩm', layout: 'adminLayout', productPage: true, book });
});

router.post('/book/:id', async function (req, res, next) {
  var book = req.body
  // console.log(book)
  await Book.updateBook(book)
  res.render('admin/updatebook', { title: 'Sản phẩm', layout: 'adminLayout', productPage: true, book, ok: true });
});


// ----------------------------------------------------------------------------------------------------------



/* GET order page. */
router.get('/order', async function (req, res, next) {
  var orders = await Order.getOrdersWithTotal()
  res.render('admin/order', { title: 'Đơn hàng', layout: 'adminLayout', orderPage: true, orders });
});

router.get('/order/:id', async function (req, res, next) {
  var order = await Order.getStatusOrder(req.params.id)
  console.log(order)
  res.render('admin/updateorder', { title: 'Đơn hàng', layout: 'adminLayout', orderPage: true, order: order[0] });
});

router.post('/order/:id', async function (req, res, next) {
  await Order.updateOrder(req.body)

  res.render('admin/updateorder', { title: 'Đơn hàng', layout: 'adminLayout', orderPage: true, order: req.body, ok: true });
});






/* GET coupon page. */
router.get('/coupon', async function (req, res, next) {
  var coupons = await Coupon.getAll()
  // console.log(coupon)

  res.render('admin/coupon', { title: 'Mã giảm giá', layout: 'adminLayout', couponPage: true, coupons });
});

router.get('/coupon/add', async function (req, res, next) {

  res.render('admin/addcoupon', { title: 'Mã giảm giá', layout: 'adminLayout', couponPage: true });
});


router.post('/coupon/add', async function (req, res, next) {
  await Coupon.insert(req.body)
  res.render('admin/addcoupon', { title: 'Mã giảm giá', layout: 'adminLayout', couponPage: true, ok: true });
});

router.get('/coupon/:id', async function (req, res, next) {
  var coupon = await Coupon.getCoupon(req.params.id)
  console.log(coupon)
  res.render('admin/updatecoupon', { title: 'Mã giảm giá', layout: 'adminLayout', couponPage: true, coupon: coupon[0] });
});

router.post('/coupon/update', async function (req, res, next) {
  await Coupon.update(req.body)
  res.render('admin/updatecoupon', { title: 'Mã giảm giá', layout: 'adminLayout', couponPage: true, ok: true, coupon: req.body });
});





/* GET client page. */
router.get('/client', async function (req, res, next) {
  var clients = await User.getAll()
  res.render('admin/client', { title: 'Khách hàng', layout: 'adminLayout', clientPage: true, clients });
});

module.exports = router;
