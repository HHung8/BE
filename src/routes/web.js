const express = require("express");
const {getHome, getTest, getRender} = require('../controllers/homeController');
const route = express.Router();

route.get("/", getHome);
route.get("/abc", getTest);
route.get("/test", getRender);
module.exports = route;
