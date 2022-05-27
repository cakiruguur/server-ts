import { Router } from "express";
import UserController from "./UserController";

const router = Router()

router.get('/',UserController.list)
router.post('/',UserController.insert)

export default router