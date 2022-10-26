var express = require('express');
const md5 = require('md5');
var router = express.Router();
var db = require('../lib/db');
const Book = require('../models/book');
const Category = require('../models/category');
const User = require('../models/user');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var user = null
  if (req.session.User) {
    console.log("has Login")
    user = req.session.User
  }

  var books = await Book.getAllBooksWithoutCateGory();
  var categories = await Category.getAllCategories();
  // console.log(books)
  res.render('index', { title: 'Home Page', books, categories, user });
});

/* GET login page. */
router.get('/the-loai/:id', async function (req, res, next) {
  var category = await Category.getCategory(req.params.id)
  category = category[0];

  var user = null
  if (req.session.User) {
    console.log("has Login")
    user = req.session.User
  }
  // console.log(category);

  var books = await Book.getCategoryBooks(category.idcategory);
  console.log(books)
  res.render('category', { title: category.name, books, user });
});

/* GET login page. */
router.get('/san-pham/:id', async function (req, res, next) {

  var book = await Book.getBook(req.params.id);
  console.log(book)
  res.render('book-detail', { book });
});


/* GET login page. */
router.get('/login', function (req, res, next) {
  if (req.session.User) {
    res.redirect('/')
    return
  }
  res.render('login', { title: 'Login Page' });
});

/* GET login page. */
router.post('/login', async function (req, res, next) {


  var hashPassword = md5(req.body.password);
  var user = await User.validateLogin(req.body.username)
  console.log(req.body)
  if (user && user.password == hashPassword) {
    req.session.User = user
    if (user.username === 'admin') {
      res.redirect('/admin')
      return;
    }

    res.redirect('/')
    return;
  }
  else
    res.render('login', { title: 'Login Page', error: true });
});

/* GET login page. */
router.get('/logout', async function (req, res, next) {

  req.session.User = null

  res.redirect('/login');
});

/* GET Register page. */
router.get('/register', function (req, res, next) {
  res.render('register', { title: 'Register Page' });
});

/* GET Register page. */
router.post('/register', async function (req, res, next) {
  console.log(req.body)
  await User.register(req.body)
  req.session.User = req.body
  res.redirect('/')

});

/* GET Register page. */
router.post('/search', async function (req, res, next) {
  console.log(req.body.content)

  var user = null
  if (req.session.User) {
    console.log("has Login")
    user = req.session.User
  }

  var books = await Book.find(req.body.content)
  res.render('search', { books, user });
});


module.exports = router;
