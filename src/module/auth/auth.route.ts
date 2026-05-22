import { Router } from "express";
import { userCreate } from "./auth.controller";

const router = Router()

router.post("/auth/signup",userCreate)

export default router