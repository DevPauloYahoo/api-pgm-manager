import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../helpers';

@Entity('visitors')
export class Visitor extends BaseEntity {
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  document: string;
}
