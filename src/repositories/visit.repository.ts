import { appDatasource } from '../data-source';
import { Visit } from '../entities';

export const visitRepository = appDatasource.getRepository(Visit);
