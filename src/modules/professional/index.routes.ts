import { Router } from 'express';
import ProfessionalController from './controller';
ProfessionalController
const ProfessionalRouter = Router();

const professionalController = new ProfessionalController();

ProfessionalRouter.get("/getAll", professionalController.getAllProfessionals);
ProfessionalRouter.post("/create", professionalController.createProfessional);
ProfessionalRouter.put("/desactive/:id", professionalController.desactiveProfessional);

export default ProfessionalRouter;