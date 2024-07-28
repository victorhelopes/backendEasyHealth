import { Request, Response } from 'express';

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { IProfessional } from '../../@types/professional';
import { IGender } from '../../@types/gender';

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

  public async getProfessionals(request: Request, response: Response): Promise<Response> {
    try{
      const { name, isActive, gender } = request.query
      const result = await Service.findByNameOrGenderOrIsActive({
        name: name as string, 
        isActive: isActive as boolean | undefined, 
        gender: gender as IGender["gender"]
      })
      return response.json(result)
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async createProfessional(request: Request, response: Response): Promise<Response> {
    try{
      const body: IProfessional = request.body;
      const result = await Service.createProfessional(body)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async updateProfessional(request: Request, response: Response): Promise<Response>{
    try{
      const { id } = request.params; 
      const body: IProfessional = request.body;
      const result = await Service.updateProfessional({_id: id, data: body})
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async desactiveProfessional(request: Request, response: Response): Promise<Response>{
    try{
      const { id } = request.params; 
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
      const professionalInfos = {
        name: professional.name,
        lastName: professional.lastName,
        id: professional._id
      }

      const token = await jwt.sign(professionalInfos, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
      response.send({ token });
    }
  }
}
