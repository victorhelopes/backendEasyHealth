import { Router } from 'express';
import UserController from './controller';
import { authenticateToken } from '../../middleware/auth';

const PatientRouter = Router();

const userController = new UserController();

PatientRouter.get("/getAll", authenticateToken ,userController.getAllPatients);
PatientRouter.post("/create", authenticateToken, userController.createPatient);
PatientRouter.put("/update/:id", authenticateToken, userController.updatePatient);
PatientRouter.delete("/delete/:id", authenticateToken, userController.deletePatient);

export default PatientRouter;