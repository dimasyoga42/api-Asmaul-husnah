import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { postData, getData } from "../controller/function.js"


const router = express.Router();
router.get('/', getData)
router.post('/', postData)

export default router