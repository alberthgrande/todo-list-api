import Todo, { ITodo } from "../models/Todo";

export class TodoService {
  async getAll(
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: ITodo[]; total: number }> {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      Todo.find().skip(skip).limit(limit),
      Todo.countDocuments(),
    ]);

    return { data, total };
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
