import { Request, Response } from "express";
import { TodoService } from "../services/TodoService";

const service = new TodoService();

export class TodoController {
  async getTodos(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const { data, total } = await service.getAll(page, limit);
    res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      data,
    });
  }

  async getTodo(req: Request, res: Response) {
    const todo = await service.getById(req.params.id);

    todo
      ? res.status(200).json(todo)
      : res.status(404).json({ message: `Todo Not Found` });
  }

  async createTodo(req: Request, res: Response) {
    const post = await service.create(req.body);
    res.status(201).json(post);
  }

  async updateTodo(req: Request, res: Response) {
    const todo = await service.update(req.params.id, req.body);
    todo
      ? res.status(200).json(todo)
      : res.status(404).json({ message: `Todo Not Found` });
  }

  async deleteTodo(req: Request, res: Response) {
    const todo = await service.delete(req.params.id);
    todo
      ? res.status(200).json({ message: `Todo deleted successfully` })
      : res.status(404).json({ message: `Todo Not Found` });
  }
}
