var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs')
var registerHbs = require('./helper/function.hbs')
var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var adminRouter = require('./routes/admin');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
// var validateAdmin = require('./middleware/validateAdmin')

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var db = require('./config/db');
const session = require('express-session');
const validateAdmin = require('./middleware/validateAdmin');
db.conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!")
})
// db.getBooks()

/*  Router
  -indexRouter
    / : Homepage
    /login
    /register
    /logout
  -BookRouter
  /books
    / :Tat ca san pham
    /:tenthuonghieu
    /:id : Chi tiet san pham
  -CartRouter
  /carts
    /:show gio hang
    post/:Them san pham
    delete/:Xoa san pham
    put/:idsanpham Soluong



    Database
    user(username,password,name,phone,address)
    book(idbook, name, author, publicdate, idCategory, price, status)
    category(idCategory, name)
    cart(username, idbook, quantity)
    order(idOrder , username, purchase-date, delivery-date, status, discount)
    order-detail(idOrder, idbook, quantity)
    coupon(code, percent, start-day, end-day)
*/

hbs.registerPartials(__dirname + '/views/partials', function (err) { });
registerHbs(hbs);

// Use the session middleware
app.use(session({ secret: 'nga nguyen', cookie: { maxAge: 600000 } }))

app.use('/', indexRouter);
app.use('/admin', validateAdmin, adminRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/profile', profileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
