import { Request, Response } from 'express';

import Service from './services'

export default class ProfessionalController {
  public async getAllProfessionals(_: Request, response: Response): Promise<Response> {
    try{
      const result = await Service.getAll();
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }
}
