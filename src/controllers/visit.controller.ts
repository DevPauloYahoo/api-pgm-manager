import { Request, Response } from 'express';

import { createVisitSchema, Visit } from '../entities';
import { visitRepository } from '../repositories';

export class VisitController {
  async createVisit(req: Request, res: Response) {
    createVisitSchema.parse(req.body);

    await visitRepository
      .createQueryBuilder()
      .insert()
      .into(Visit)
      .values(req.body)
      .execute();

    return res
      .status(200)
      .json({ message: 'Novo atendimento adicionado com sucesso ' });
  }
}
