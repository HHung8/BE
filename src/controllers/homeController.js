const connection = require("../config/database");

const getHome = (req, res) => {
  // process data
  // call model
  let users = [];
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    console.log(">>> results", results);
    console.log(">>> check users: ", users);
    res.send(JSON.stringify(users)); // Trả về mội chuỗi string
  });
};
const getTest = (req, res) => {
  res.send(
    "あのITが難しですが面白いです。毎日頑張ってくださいねでも頭が痛いです"
  );
};
const getRender = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHome, getTest, getRender };
