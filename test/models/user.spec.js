var expect = require('chai').expect;
 
var User = require('../../backend/models/user');
 
describe('Model - User', function() {
    it('should be invalid if first_name is empty', function(done) {
        var m = new User();
 
        m.validate(function(err) {
            expect(err.errors.first_name).to.exist;
            done();
        });
    });
    it('should be invalid if last_name is empty', function(done) {
        var m = new User();
    
        m.validate(function(err) {
            expect(err.errors.last_name).to.exist;
            done();
        });
    });
    it('should be invalid if email is empty', function(done) {
        var m = new User();
    
        m.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
    it('should be invalid if graduation_date is empty', function(done) {
        var m = new User();
    
        m.validate(function(err) {
            expect(err.errors.graduation_date).to.exist;
            done();
        });
    });
    it('should be invalid if credit_hours is empty', function(done) {
        var m = new User();
    
        m.validate(function(err) {
            expect(err.errors.credit_hours).to.exist;
            done();
        });
    });
    it('should be invalid if free_response is empty', function(done) {
        var m = new User();
    
        m.validate(function(err) {
            expect(err.errors.free_response).to.exist;
            done();
        });
    });
    it('should be invalid if score is not a number', function(done) {
        var m = new User({
            score: 'TEST'
        });
    
        m.validate(function(err) {
            expect(err.errors.score).to.exist;
            done();
        });
    });
    it('should be invalid if first_name is not a string', function(done) {
        var m = new User({
            first_name: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.first_name).to.exist;
            done();
        });
    });
    it('should be invalid if last_name is not a string', function(done) {
        var m = new User({
            last_name: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.last_name).to.exist;
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
});