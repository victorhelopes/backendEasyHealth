import { Router } from 'express';

import PatientRouter from '../../modules/patient/index.routes';
import ProfessionalRouter from '../../modules/professional/index.routes';

const routes = Router();

routes.use('/patient', PatientRouter)
routes.use('/professional', ProfessionalRouter)

export default routes;
