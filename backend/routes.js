'use strict';

const express = require('express');
const router = express.Router();
const controllers = require('./controllers/');
const { check, oneOf, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const auth = require('./auth');

router.get('/users', auth.requireAdmin, controllers.users.index);
router.get('/users/:id', auth.adminOrSelf, controllers.users.get);
router.post('/users', controllers.users.store);
router.put('/users/:id', auth.adminOrSelf, controllers.users.update);
router.delete('/users/:id', auth.adminOrSelf, controllers.users.delete);

router.get('/languages', auth.requireAdmin, controllers.languages.index);
router.get('/languages/:id', auth.requireAdmin, controllers.languages.get);
router.put('/languages/:id', auth.requireAdmin, controllers.languages.update);
router.post('/languages', auth.requireAdmin, controllers.languages.store);
router.delete(
  '/languages/:id',
  auth.requireAdmin,
  controllers.languages.delete
);

router.get('/projects', auth.requireAdmin, controllers.projects.index);
router.get('/projects/:id', auth.requireAdmin, controllers.projects.get);
router.post('/projects', auth.requireAdmin, controllers.projects.store);
// projects update
router.delete('/projects/:id', auth.requireAdmin, controllers.projects.delete);
router.get(
  '/projects/:id/members',
  auth.requireAdmin,
  controllers.projects.members
);
// add team member
// remove team member

module.exports = router;
