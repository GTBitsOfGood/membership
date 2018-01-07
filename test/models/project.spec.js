var expect = require('chai').expect;

var Project = require('../../backend/models/project');

describe('Model - Project', function() {
  it('should be invalid if description is empty', function(done) {
    var m = new Project();

    m.validate(function(err) {
      expect(err.errors.description).to.exist;
      done();
    });
  });
  it('should be invalid if organization is empty', function(done) {
    var m = new Project();

    m.validate(function(err) {
      expect(err.errors.organization).to.exist;
      done();
    });
  });
  it('should be invalid if description is not a string', function(done) {
    var m = new Project({
      description: {}
    });

    m.validate(function(err) {
      expect(err.errors.description).to.exist;
      done();
    });
  });
  it('should be invalid if organization is not a string', function(done) {
    var m = new Project({
      organization: {}
    });

    m.validate(function(err) {
      expect(err.errors.organization).to.exist;
      done();
    });
  });
});
