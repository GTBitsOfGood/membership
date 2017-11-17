var expect = require('chai').expect;
 
var Language = require('../../backend/models/language');
 
describe('Model - Language', function() {
    it('should be invalid if name is empty', function(done) {
        var m = new Language();
 
        m.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
    it('should be invalid if name is not a string', function(done) {
        var m = new Language({
        	name: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
    it('should be invalid if value is empty', function(done) {
        var m = new Language();
 
        m.validate(function(err) {
            expect(err.errors.value).to.exist;
            done();
        });
    });
    it('should be invalid if value is not a number', function(done) {
        var m = new Language({
        	value: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.value).to.exist;
            done();
        });
    });
    it('should be valid given proper data', function(done) {
        var m = new Language({
            name: 'Node.js',
            value: 2
        });
    
        m.validate(function(err) {
            expect(err).to.be.null;
            done();
        });
    });
});