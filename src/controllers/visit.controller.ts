import { Request, Response } from 'express';

import { createVisitSchema } from '../entities';

export class VisitController {
  async createVisit(req: Request, res: Response) {
    createVisitSchema.parse(req.body);

    return res.status(200).json(req.body);
  }
}
