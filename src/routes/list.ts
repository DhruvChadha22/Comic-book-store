import express from "express";
import { getComicsList } from "../controllers/list";
import { validateData } from "../middleware/input-validator";
import { listComicsSchema } from "../schemas/list";

const router = express.Router();

//Send the incoming requests to their controllers
router.get("/", validateData(listComicsSchema), getComicsList);

export default router;
