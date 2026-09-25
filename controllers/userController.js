const db = require("../db/queries");

async function getUsernames(req, res) {
  let usernames = [];
  const query = req.query.search;
  if (query) {
    usernames = await db.getSearchedNames(query);
  } else {
    usernames = await db.getAllUsernames();
  }

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

async function deleteAllUsernames(req, res) {
  await db.deleteUsernames();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  newUsernameGet,
  newUsernamePost,
  deleteAllUsernames,
};
