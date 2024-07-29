import { Router } from 'express';
import ProfessionalController from './controller';
import { authenticateToken } from '../../middleware/auth';
ProfessionalController
const ProfessionalRouter = Router();

const professionalController = new ProfessionalController();

ProfessionalRouter.get("/me", authenticateToken, professionalController.getProfessionalLoggedInformation);

ProfessionalRouter.get("/getAll", professionalController.getAllProfessionals);
ProfessionalRouter.get("/getProfessionals", professionalController.getProfessionals);

ProfessionalRouter.post("/login", professionalController.login);
ProfessionalRouter.post("/create", professionalController.createProfessional);

ProfessionalRouter.put("/desactive/:id", professionalController.desactiveProfessional);
ProfessionalRouter.put("/update/:id", professionalController.updateProfessional);

export default ProfessionalRouter;