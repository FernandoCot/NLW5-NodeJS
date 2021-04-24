import { Request, response, Response } from 'express'
import { SettingsService } from '../services/settingsService';

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });
      return res.json(settings);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { SettingsController }