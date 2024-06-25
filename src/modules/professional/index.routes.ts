import { Router } from 'express';
import ProfessionalController from './controller';
ProfessionalController
const ProfessionalRouter = Router();

const professionalController = new ProfessionalController();

ProfessionalRouter.get("/getAll", professionalController.getAllProfessionals);

export default ProfessionalRouter;