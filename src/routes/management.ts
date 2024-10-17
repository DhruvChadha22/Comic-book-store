import express from "express";
import { validateData } from "../middleware/input-validator";
import { createComic, deleteComic, editComic } from "../controllers/management";
import { createComicSchema, deleteComicSchema, editComicSchema } from "../schemas/management";

const router = express.Router();

//Send the incoming requests to their controllers
router.post("/create", validateData(createComicSchema), createComic);
router.patch("/edit", validateData(editComicSchema), editComic);
router.delete("/delete", validateData(deleteComicSchema), deleteComic);

export default router;
