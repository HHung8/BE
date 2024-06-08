const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDservice");

const getHome = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", {listUsers: results});
};
const getTest = (req, res) => {
  res.send(
    "あのITが難しですが面白いです。毎日頑張ってくださいねでも頭が痛いです"
  );
};
const getRender = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  // console.log(">>> req.body", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  // let {email, name, city} = req.body;

  // connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed !");
  //   }
  // );

  let [result, fiels] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,[email, name, city]
  );
  res.send('Created user succeed !')

  // const [result, fields] = await connection.query('select * from Users u')
  // console.log(">>> check results:", result);
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = { getHome, getTest, getRender, postCreateUser, getCreatePage };
