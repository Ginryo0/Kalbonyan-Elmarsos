const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', function () {
  // lIFE cycle HOOKS - before/after -> before all testCases - beforeEach/afterEach -> before each testCase
  before(function (done) {
    mongoose
      .connect(
        'mongodb+srv://ginryo:LYcvrzU7BRLV8nLx@cluster0.spv0bgt.mongodb.net/test-feed?'
      )
      .then((result) => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Tester',
          posts: [],
          _id: '5c0f66b979af55031b34728a',
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  beforeEach(function (done) {});
  afterEach(function (done) {});

  it('Should throw error if accessing DB fails', function (done) {
    sinon.stub(User, 'findOne');
    // DB acess -> throw error
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@test.com',
        passowrd: 'test1',
      },
    };

    // done() after async funcs
    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    User.findOne.restore();
  });

  // Testing DB
  it('should send a response with valid user Status of an existing user', function (done) {
    const req = { userId: '5c0f66b979af55031b34728a' };
    const res = {
      statusCode: 500,
      userStatus: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.userStatus = data.status;
      },
    };

    AuthController.getUserStatus(req, res, () => {}).then(() => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.userStatus).to.be.equal('I am new!');
      // Delete all users clean up data - Disconnect DB - DONE
      done();
    });
  });

  after(function (done) {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
