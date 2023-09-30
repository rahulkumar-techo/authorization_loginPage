import express from "express";
import registerCon from "../controllers/registerCon.js";
import loginCon from "../controllers/loginCon.js";
const routes = express.Router();

routes.post("/register",registerCon);
routes.post("/login",loginCon);

export default routes;
