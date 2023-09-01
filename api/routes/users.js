import express from "express";
import {getBaus} from '../controllers/user.js'


const router = express.Router()

router.get("/", getBaus)

export default router
