import { Router } from 'express';
import UserController from './controller';

const PatientRouter = Router();

const userController = new UserController();

PatientRouter.get("/getAll", userController.getAllPatients);
PatientRouter.post("/create", userController.createPatient);
PatientRouter.put("/update/:id", userController.updatePatient);
PatientRouter.delete("/delete/:id", userController.deletePatient);

export default PatientRouter;