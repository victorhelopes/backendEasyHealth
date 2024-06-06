import { Request, Response } from 'express';

import { IPatient } from '../../@types/patient';

import Service from './services'

export default class UserController {
  public async getAllPatients(_: Request, response: Response): Promise<Response> {
    try{
      const result = await Service.getAll();
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async createPatient(req: Request, response: Response): Promise<Response> {
    try{
      const body: IPatient = req.body;
      const result = await Service.createPatient(body)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async updatePatient(req: Request, response: Response): Promise<Response> {
    try{
      const body: IPatient = req.body;
      const { id } = req.params;
      const result = await Service.updatePatient({data: body, _id: id})
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }
}
