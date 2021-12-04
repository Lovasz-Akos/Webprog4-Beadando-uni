import express from "express";
const router = express.Router();
import * as controller from "./user-controller";
import * as auth from "../../services/auth-service";

router.get("/user", auth.requireLogin, controller.index);

export default router;