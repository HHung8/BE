const express = require("express"); // commonjs
const path = require("path"); // commonjs
require("dotenv").config();
const webRoutes = require("./routes/web");
const connection = require("./config/database");


// import express from 'express'; // es modules
// console.log('>>> check env:', process.env)
const configViewEngine = require("./config/viewEngine");
const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || "localhost";

// config req.body
app.use(express.json()) //  for json
app.use(express.urlencoded({extended: true})) // for form data

//config tamplate engine
configViewEngine(app);
app.use("/", webRoutes);

// simple query
// connection.query("SELECT * FROM  Users u", function (err, results, fields) {
//   console.log(">>>result= ", results);
// });

// Khai báo route
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
