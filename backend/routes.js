"use strict";

const express = require("express");
const router = express.Router();
const controllers = require("./controllers/");
const { check, oneOf, validationResult } = require("express-validator/check");
const { matchedData } = require("express-validator/filter");

router.get("/users", controllers.users.index);
router.get("/users/:id", controllers.users.get);
router.post("/users", controllers.users.store);
router.put("/users/:id", controllers.users.update);
router.delete("/users/:id", controllers.users.delete);

router.get("/languages", controllers.languages.index);
router.get("/languages/:id", controllers.languages.get);
router.put("/languages/:id", controllers.languages.update);
router.post("/languages", controllers.languages.store);
router.delete("/languages/:id", controllers.languages.delete);

router.get("/projects", controllers.projects.index);
router.get("/projects/:id", controllers.projects.get);
router.post("/projects", controllers.projects.store);
// projects update
router.delete("/projects/:id", controllers.projects.delete);
router.get("/projects/:id/members", controllers.projects.members);
// add team member
// remove team member

module.exports = router;
