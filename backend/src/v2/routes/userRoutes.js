import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
import { v1ToV2Adapter } from "../../utils/translationLayer.js";

const router = express.Router();

router.post("/", v1ToV2Adapter, createUser);
router.get("/", getUsers);

export default router;
