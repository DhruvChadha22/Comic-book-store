import express from "express";
import { getComicsList } from "../controllers/list";

const router = express.Router();

//Send the incoming requests to their controllers
router.get("/", getComicsList);

export default router;
