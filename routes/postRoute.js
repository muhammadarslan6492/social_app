import express from "express";
import { getPost, newPost } from "../controller/postController.js";
import {createPostValidator} from "../helpers/index.js"

const router = express.Router();

router.route("/").get(getPost).post(createPostValidator, newPost);
router


export default router;
