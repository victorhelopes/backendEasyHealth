import { Router } from 'express';

import PatientRouter from '../../modules/patient/index.routes';

const routes = Router();

routes.use('/patient', PatientRouter)

export default routes;
