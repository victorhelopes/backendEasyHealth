import { Router } from 'express';
import PatientProfessionalController from './controller';
import { authenticateToken } from '../../middleware/auth';
PatientProfessionalController
const PatientProfessionalRouter = Router();

const patientProfessionalController = new PatientProfessionalController();

PatientProfessionalRouter.get("/getPatients", authenticateToken, patientProfessionalController.getPatients);

PatientProfessionalRouter.post("/create", authenticateToken, patientProfessionalController.createPatientProfessional)

PatientProfessionalRouter.put("/desactive/:id", authenticateToken, patientProfessionalController.desactiveRelation);

PatientProfessionalRouter.put("/active/:id", authenticateToken, patientProfessionalController.activeRelation);

export default PatientProfessionalRouter;