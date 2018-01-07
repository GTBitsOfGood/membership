var expect = require('chai').expect;

var User = require('../../backend/models/user');

describe('Model - User', function() {
  // it('should be invalid if name is empty', function(done) {
  //     var m = new User();

  //     m.validate(function(err) {
  //         expect(err.errors.name).to.exist;
  //         done();
  //     });
  // });
  // it('should be invalid if email is empty', function(done) {
  //     var m = new User();

  //     m.validate(function(err) {
  //         expect(err.errors.email).to.exist;
  //         done();
  //     });
  // });
  it('should be invalid if score is not a number', function(done) {
    var m = new User({
      score: 'TEST'
    });

    m.validate(function(err) {
      expect(err.errors.score).to.exist;
      done();
    });
  });
  it('should be invalid if name is not a string', function(done) {
    var m = new User({
      name: {}
    });

    m.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });
  it('should be invalid if email is not a string', function(done) {
    var m = new User({
      email: {}
    });

    m.validate(function(err) {
      expect(err.errors.email).to.exist;
      done();
    });
  });
  it('should be invalid if credit_hours is not a number', function(done) {
    var m = new User({
      credit_hours: 'TEST'
    });

    m.validate(function(err) {
      expect(err.errors.credit_hours).to.exist;
      done();
    });
  });
  it('should be invalid if websites is not an array', function(done) {
    var m = new User({
      websites: {}
    });

    m.validate(function(err) {
      expect(err.errors.websites).to.exist;
      done();
    });
  });
  it('should be invalid if websites is not an array of strings', function(done) {
    var m = new User({
      websites: [{}, {}]
    });

    m.validate(function(err) {
      expect(err.errors.websites).to.exist;
      done();
    });
  });
  it('should be invalid if role is not a valid value', function(done) {
    var m = new User({
      role: 'Mr. Peanut Butter'
    });

    m.validate(function(err) {
      expect(err.errors.role).to.exist;
      done();
    });
  });
  // it('should be invalid if github.id is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.id).to.exist;
  //     done();
  //   });
  // });
  // it('should be invalid if github.username is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.username).to.exist;
  //     done();
  //   });
  // });
  // it('should be invalid if github.access_token is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.access_token).to.exist;
  //     done();
  //   });
  // });
  // it('should be invalid if github.avatar_url is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.avatar_url).to.exist;
  //     done();
  //   });
  // });
  // it('should be invalid if github.profile_url is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.profile_url).to.exist;
  //     done();
  //   });
  // });
  // it('should be invalid if github.public_repos is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.public_repos).to.exist;
  //     done();
  //   });
  // });
  // it('should be invalid if github.followers is empty', function (done) {
  //   var m = new User();

  //   m.validate(function (err) {
  //     expect(err.errors.github.followers).to.exist;
  //     done();
  //   });
  // });
});
