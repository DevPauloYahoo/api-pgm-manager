import { Router } from 'express';

import { VisitController } from './controllers';
import { resolver } from './helpers';

const routes = Router();

routes.post('/visits', resolver(new VisitController().createVisit));

export default routes;
