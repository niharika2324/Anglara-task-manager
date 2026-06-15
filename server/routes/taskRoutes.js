import express from "express";
import { createTask, getTasks, deleteTask, updateTask, markComplete } from "../controllers/taskController.js";

const router = express.Router();

router.post("/",createTask);
router.get("/",getTasks);
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);
router.patch("/:id/mark-complete",markComplete);
export default router;