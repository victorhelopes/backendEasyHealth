import { Request, Response } from 'express';

import { IPatient } from '../../@types/patient';

import Service from './services'
import PatientProfessionalServices from '../patientProfessional/services'
import { AuthenticatedRequest } from '../../middleware/auth';

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
 
  public async getPatientByCPF(request: Request, response: Response): Promise<Response> {
    try{
      const { cpf } = request.params;
      const result = await Service.getByCPF(cpf);
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  }

  public async createPatient(req: AuthenticatedRequest, response: Response): Promise<Response> {
    try{
        const professionalId = req.user?.id || '';
        const body: IPatient = req.body;
        const result = await Service.createPatient(body)
        const patientProfessional = {
          professional: professionalId,
          patient: result.cpf,
          isActive: true,
      }
  
      const realtion = await PatientProfessionalServices.createPatientProfessional(patientProfessional)

      return response.json( {patient: result, realtion: realtion} );
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

  public async deletePatient(req:Request, response: Response): Promise<Response> {
    try{
      const { id } = req.params; 
      const result = await Service.deletePatient({ _id: id })
      return response.json(result);
  }catch(e){
    if (e instanceof Error)
      return response.status(500).json({ message: e.message });
    return response.status(500).json({ message: 'Unknown Error.' });
  }
  }
}
