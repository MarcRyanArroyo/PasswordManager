import oExpress from 'express';
import { Register, Login, Home } from '../controllers/LoginController.js';

const oRouter = oExpress.Router();

oRouter.post("/register", Register);
oRouter.post("/login", Login);
oRouter.get('/', Home);

export default oRouter;