import express from "express";
import { signUp, getAllUsers, signIn } from "../controller/authController.js";
import { userPostValidator } from "../helpers/index.js";

const router = express.Router();

router.route("/signup").post(userPostValidator, signUp);
router.route("/getusers").get(getAllUsers);
router.route("/signin").post(signIn);

export default router;
