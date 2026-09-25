const pool = require("./pool");

async function getAllUsernames(params) {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSearchedNames(term) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE $1",
    [`%${term}%`],
  );
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  getSearchedNames,
  insertUsername,
  deleteUsernames,
};
