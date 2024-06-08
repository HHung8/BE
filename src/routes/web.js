const express = require("express");
const {getHome, getTest, getRender, postCreateUser, getCreatePage} = require('../controllers/homeController');
const route = express.Router();

route.get("/", getHome);
route.get("/abc", getTest);
route.get("/test", getRender);
route.get("/create", getCreatePage)
route.post("/create-user", postCreateUser)
module.exports = route;
