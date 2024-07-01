import { Request, Response } from 'express';

import Service from './services'
import { IProfessional } from '../../@types/professional';

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

  public async createProfessional(req: Request, response: Response): Promise<Response>{
    try{
      const body: IProfessional = req.body;
      const result = await Service.createProfessional(body)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async desactiveProfessional(req: Request, response: Response): Promise<Response>{
    try{
      const { id } = req.params; 
      const result = await Service.desactiveProfessional(id)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }
}
