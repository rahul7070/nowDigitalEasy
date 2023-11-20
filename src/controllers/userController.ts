import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
  async addUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.addUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getSingleUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getSingleUser(req.params.userId);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await userService.deleteUser(req.params.userId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.updateUser(req.params.userId, req.body);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new UserController();
