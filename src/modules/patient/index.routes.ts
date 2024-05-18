import { Router } from 'express';
import UserController from './controller';

const PatientRouter = Router();

const userController = new UserController();

PatientRouter.get("/getAll", userController.getAllPatients);
PatientRouter.post("/create", userController.createPatient);

export default PatientRouter;