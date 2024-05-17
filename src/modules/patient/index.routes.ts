import { Router } from 'express';
import UserController from './controller';

const PatientRouter = Router();

const userController = new UserController();

PatientRouter.get("/getAllPatients", userController.getAllPatients);

export default PatientRouter;