import { Router } from "express";
import { generatenewshorturl } from "../controllers/url.controller.js";
// import redirectingurl from "../controllers/redirecturl.controller.js";
const router=Router()

router.post("/url",generatenewshorturl)
// router.get("/:shortid",redirectingurl)

export default router