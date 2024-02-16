import analytics from "../controllers/analytics.controller.js";
import { Router } from "express";
const router=Router();

router.get("/:shortid",analytics)

export default router 