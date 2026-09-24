const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.render("index", {
    title: "Username List",
    usernames,
  });
}

async function newUsernameGet(req, res) {
  res.render("addUser", {
    title: "Create Username",
  });
}

async function newUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  newUsernameGet,
  newUsernamePost,
};
