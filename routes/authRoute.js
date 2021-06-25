import express from "express"
import { signUp } from "../controller/authController.js"
import { userPostValidator } from "../helpers/index.js";

const router = express.Router();

router.route("/signup").post(userPostValidator ,signUp);

export default router;