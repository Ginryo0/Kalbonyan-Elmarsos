const expect = require('chai').expect;
const authMid = require('../middleware/is-auth');
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

describe('Auth middleware', function () {
  it('should throw error if no authorization header', function () {
    // no auth header
    const req = {
      get: function () {
        return null;
      },
    };
    //thorw exact error message
    expect(authMid.bind(this, req, {}, () => {})).to.throw(
      'Not Authenticated.'
    );
  });

  it('should throw error if authorization header is only one string', function () {
    // auth header not like 'bearer token'
    const req = {
      get: function (headerName) {
        return 'xyz';
      },
    };

    //thorw exact error message
    expect(authMid.bind(this, req, {}, () => {})).to.throw();
  });

  it('should yield a userId after token is decoded', function () {
    // auth header not like 'bearer token'
    const req = {
      get: function (headerName) {
        return 'Bearer xyz';
      },
    };

    // replace verify method from jwt pkg with a stub = mock to return a predefined result ;
    sinon.stub(jwt, 'verify');
    jwt.verify.returns({ userId: 'abc' });
    // Globaly replacing verify method
    // jwt.verify = function () {
    //   return { userId: 'abc' };
    // };
    authMid(req, {}, () => {});
    expect(req).to.have.property('userId');
    expect(req).to.have.property('userId', 'abc');
    expect(jwt.verify.called).to.be.true;

    // restore orig func
    jwt.verify.restore();
  });

  it('should throw error if token cannot be verified', function () {
    // auth header not like 'bearer token'
    const req = {
      get: function (headerName) {
        return 'Bearer xyz';
      },
    };

    //thorw exact error message
    expect(authMid.bind(this, req, {}, () => {})).to.throw();
  });
});
