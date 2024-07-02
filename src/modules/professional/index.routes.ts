import { Router } from 'express';
import ProfessionalController from './controller';
ProfessionalController
const ProfessionalRouter = Router();

const professionalController = new ProfessionalController();

ProfessionalRouter.get("/getAll", professionalController.getAllProfessionals);
ProfessionalRouter.get("/getProfessionals", professionalController.getProfessionals);

ProfessionalRouter.post("/login", professionalController.login);
ProfessionalRouter.post("/create", professionalController.createProfessional);

ProfessionalRouter.put("/desactive/:id", professionalController.desactiveProfessional);
ProfessionalRouter.put("/update/:id", professionalController.updateProfessional);

export default ProfessionalRouter;