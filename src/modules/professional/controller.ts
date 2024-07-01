import { Request, Response } from 'express';

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { IProfessional } from '../../@types/professional';

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

  public async updateProfessional(req: Request, response: Response): Promise<Response>{
    try{
      const { id } = req.params; 
      const body: IProfessional = req.body;
      const result = await Service.updateProfessional({_id: id, data: body})
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
  
  public async login(req: Request, response: Response){
    const { email, password } = req.body;
    const professional = await Service.findByEmail(email);

    if (!professional) {
        return response.status(400).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, professional.password);
    if (!isPasswordValid) {
        return response.status(400).send('Invalid password');
    }
    
    if(process.env.JWT_SECRET_KEY){
      const token = await jwt.sign({ email: email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
      response.send({ token });
    }
  }
}
