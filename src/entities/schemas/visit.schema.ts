import { z } from 'zod';

export const createVisitSchema = z.object({
  badge: z
    .string({ required_error: 'Crachá é obrigatório' })
    .min(1, 'Crachá é obrigatório')
    .min(2, 'Crachá deve ser informado com dois dígitos. Ex: 01, 02...')
    .max(2, 'Crachá deve ter no máximo dois dígitos'),

  secretary: z
    .string({ required_error: 'Secretaria é obrigatório' })
    .min(1, 'Secretaria é obrigatório'),

  status: z.boolean().optional(),

  visitor: z.string().optional(),
});
