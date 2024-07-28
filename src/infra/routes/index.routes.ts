import { Router } from 'express';

import PatientRouter from '../../modules/patient/index.routes';
import ProfessionalRouter from '../../modules/professional/index.routes';
import PatientProfessionalRouter from '../../modules/patientProfessional/index.routes';

const routes = Router();

routes.use('/patient', PatientRouter)
routes.use('/professional', ProfessionalRouter)
routes.use('/patientProfessional', PatientProfessionalRouter)

export default routes;
