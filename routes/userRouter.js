const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", userController.getUsernames);
userRouter.get("/new", userController.newUsernameGet);
userRouter.post("/new", userController.newUsernamePost);
userRouter.get("/delete", userController.deleteAllUsernames);

module.exports = userRouter;
