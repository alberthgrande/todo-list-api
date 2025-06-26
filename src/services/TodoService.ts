import Todo, { ITodo } from "../models/Todo";

export class TodoService {
  async getAll(): Promise<ITodo[]> {
    return Todo.find();
  }

  async getById(id: string): Promise<ITodo | null> {
    return Todo.findById(id);
  }

  async create(data: string): Promise<ITodo> {
    return Todo.create(data);
  }

  async update(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return Todo.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ITodo | null> {
    return Todo.findByIdAndDelete(id);
  }
}
