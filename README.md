# Express Database Learning Project

A small Express app built mainly for learning how to connect a Node.js web server to a PostgreSQL database.

The app displays usernames stored in PostgreSQL and lets you add new usernames through a simple form.

## What This Project Demonstrates

- Creating an Express application
- Serving EJS views and static CSS files
- Connecting Express to PostgreSQL with the `pg` package
- Reusing a PostgreSQL connection pool
- Keeping database queries in a separate module
- Reading form data with `express.urlencoded`
- Using parameterized SQL queries for inserts

## Requirements

- Node.js
- PostgreSQL
- A PostgreSQL database named `top_users`

## Setup

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Make sure PostgreSQL is running and create the database:

   ```sql
   CREATE DATABASE top_users;
   ```

3. Check the connection settings in `db/pool.js`. The current defaults are:
   - Host: `localhost`
   - User: `postgres`
   - Database: `top_users`
   - Port: `5432`
   - Password: empty

   Update the password or other values if your local PostgreSQL setup is different.

4. Create the table and add sample users:

   ```bash
   node db/populatedb.js
   ```

## Run the App

Start the server with:

```bash
node app.js
```

Then open [http://localhost:3000](http://localhost:3000) in a browser.

## Routes

| Method | Route  | Description                                 |
| ------ | ------ | ------------------------------------------- |
| `GET`  | `/`    | Displays all usernames from the database    |
| `GET`  | `/new` | Displays the add-username form              |
| `POST` | `/new` | Inserts a new username and redirects to `/` |

## Project Structure

```text
app.js                 Express app entry point
controllers/           Request handlers
  userController.js
db/                    PostgreSQL connection and queries
  pool.js
  populatedb.js
  queries.js
public/                Static files
  styles.css
routes/                Application routes
  userRouter.js
views/                 EJS templates
  addUser.ejs
  index.ejs
```

## Learning Flow

1. A request reaches a route in `routes/userRouter.js`.
2. The route calls a controller in `controllers/userController.js`.
3. The controller calls a function in `db/queries.js`.
4. The query uses the shared pool from `db/pool.js` to communicate with PostgreSQL.
5. The result is rendered in an EJS view or the request is redirected.
