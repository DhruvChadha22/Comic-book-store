import express from "express";
import { getComicDetails } from "../controllers/details";

const router = express.Router();

//Send the incoming requests to their controllers
router.get("/:id", getComicDetails);

export default router;
