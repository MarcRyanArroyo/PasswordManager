import oExpress from 'express';
import { Register, Login } from '../controllers/LoginController.js';

const oRouter = oExpress.Router();

oRouter.post("/register", Register);
oRouter.post("/login", Login);

export default oRouter;