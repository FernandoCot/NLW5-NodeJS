import { Request, response, Response } from 'express'
import { UsersService } from '../services/UsersService';

class UsersController {
  async create(req: Request, res: Response) {
    const { email } = req.body;

    const usersService = new UsersService();

    try {
      const user = await usersService.create(email);
      return res.json(user);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { UsersController }