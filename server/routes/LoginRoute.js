const oExpress = require("express");
const { Register, Login } = require("../controllers/LoginController");
const oRouter = oExpress.Router();

oRouter.post("/register", Register);
oRouter.post("/login", Login);

module.exports = oRouter;