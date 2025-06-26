import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

const service = new AuthService();

export class AuthController {
  register = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    try {
      await service.register(name, email, password);

      res.status(201).json({ message: `User created successfully` });
    } catch (error) {
      res
        .status(400)
        .json({ message: `User already exist or invalid data`, error });
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await service.login(email, password);

      if (!token) {
        res.status(401).json({ message: `Invalid credentials` });
        return;
      }

      res.status(200).json({ message: `Login successfully`, token });
    } catch (error) {
      res
        .status(400)
        .json({ message: `Invalid credentials or invalid data`, error });
    }
  };
}
