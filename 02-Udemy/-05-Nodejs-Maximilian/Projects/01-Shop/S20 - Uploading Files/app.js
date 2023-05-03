const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://ginryo:LYcvrzU7BRLV8nLx@cluster0.spv0bgt.mongodb.net/shop?';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});
// you can config it if needed
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(err, destination)
    cb(null, path.join(__dirname, 'images'));
  },
  filename: (req, file, cb) => {
    // cb(err, filename) -> we try to create unique filename here + originalname to keep extension
    // console.log(file);
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // store only files of these types
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    console.log('Valid img');
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
// multer middleware, .single(input name) = single file
// {dest: where to store it}, {storage: more config = look above}
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);

// app.use(multer({ dest: 'images' }).single('image'));

app.use(express.static(path.join(__dirname, 'public')));
// static = serves files as if they were on the root folder
// express assumes the files are in the root folder = served like -> localhost300/img.png not localhost/images/img.png
// we give the middleware /images -> when you see a request looking for smth in path containing /images -> look for it in images folder
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  // throw new Error('some error') -> errors in sync code will be handled by midlle ware
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      // throw new Error('some error');
      console.log(__dirname);
      // no such user in DB
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch((err) => {
      next(err);
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

// error handling middleware -> has 4 arguments
// executed -> when an error is passed to next or thrown
app.use((error, req, res, next) => {
  console.log(error);
  res.redirect('/500');
  // res.status(500).render('500', {
  //   pageTitle: 'Error!',
  //   path: '/500',
  //   isAuthenticated: req.session.isLoggedIn,
  // });
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
