import { Request, Response } from 'express';
import Service from './services'
import { AuthenticatedRequest } from '../../middleware/auth';

export interface PatientProfessionalProps {
    professional: string,
    patient: string,
    isActive: boolean,
  }

export default class PatientProfessionalController {
  public async getPatients(request: AuthenticatedRequest, response: Response): Promise<Response> {
    try{
      const id = request.user?.id || ''
      const result = await Service.getPatients(id);
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async createPatientProfessional(request: AuthenticatedRequest, response: Response): Promise<Response> {
    try{
      const { id } = request.body; 

      const body: PatientProfessionalProps = {
        professional: request.user?.id || '',
        patient: id,
        isActive: true
      };
      const result = await Service.createPatientProfessional(body)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async desactiveRelation(request: Request, response: Response): Promise<Response>{
    try{
      const { id } = request.params; 
      const result = await Service.desactiveRelation(id)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async activeRelation(request: Request, response: Response): Promise<Response>{
    try{
      const { id } = request.params; 
      const result = await Service.activeRelation(id)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }
}
