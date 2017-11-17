var expect = require('chai').expect;
 
var Admin = require('../../backend/models/admin');
 
describe('Model - Admin', function() {
    it('should be invalid if first_name is empty', function(done) {
        var m = new Admin();
 
        m.validate(function(err) {
            expect(err.errors.first_name).to.exist;
            done();
        });
    });
    it('should be invalid if first_name is not a string', function(done) {
        var m = new Admin({
        	first_name: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.first_name).to.exist;
            done();
        });
    });
    it('should be invalid if last_name is empty', function(done) {
        var m = new Admin();
 
        m.validate(function(err) {
            expect(err.errors.last_name).to.exist;
            done();
        });
    });
    it('should be invalid if last_name is not a string', function(done) {
        var m = new Admin({
        	last_name: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.last_name).to.exist;
            done();
        });
    });
    it('should be invalid if title is empty', function(done) {
        var m = new Admin();
 
        m.validate(function(err) {
            expect(err.errors.title).to.exist;
            done();
        });
    });
    it('should be invalid if title is not a string', function(done) {
        var m = new Admin({
        	title: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.title).to.exist;
            done();
        });
    });
    it('should be invalid if email is empty', function(done) {
        var m = new Admin();
    
        m.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
    it('should be invalid if email is not a string', function(done) {
        var m = new Admin({
        	email: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
    it('should be valid if profile_picture is empty', function(done) {
        var m = new Admin();
    
        m.validate(function(err) {
            expect(err.errors.profile_picture).to.not.exist;
            done();
        });
    });
    it('should be invalid if profile_picture is not a string', function(done) {
        var m = new Admin({
        	profile_picture: {}
        });
    
        m.validate(function(err) {
            expect(err.errors.profile_picture).to.exist;
            done();
        });
    });
});