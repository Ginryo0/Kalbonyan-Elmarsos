const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://ginryo:LYcvrzU7BRLV8nLx@cluster0.spv0bgt.mongodb.net/shop?';

// remove rewirtes thing in the uri cuz err

const app = express();
const store = new mongoDBStore({ uri: MONGODB_URI, collection: 'sessions' });

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// config -> Resave: false -> save only when needed
// saveUnintialized: false -> no session will be saved when request doesn't need it
// cookie: {max-age: ..., expires: ..}
// store -> db store
// session middleware -> automatically gets/stores session in DB now
app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  // if no session move to next
  console.log('3');
  if (!req.session.user) {
    console.log('1');
    next();
  } else {
    console.log('2');
    console.log(req.session.user);
    // we find the user obj by looking for the id from session
    User.findById(req.session.user._id)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => console.log(err));
  }
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: 'mesmesh',
          email: 'mesh@mesh.com',
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
