import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { TodoController } from "../controllers/TodoContoller";

const router = Router();
const controller = new TodoController();

router.get("/", authMiddleware, controller.getTodos.bind(controller));
router.get("/:id", authMiddleware, controller.getTodo.bind(controller));
router.post("/", authMiddleware, controller.createTodo.bind(controller));
router.put("/:id", authMiddleware, controller.updateTodo.bind(controller));
router.delete("/:id", authMiddleware, controller.deleteTodo.bind(controller));

export default router;
