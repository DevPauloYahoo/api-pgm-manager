import {Column, Entity, OneToMany} from 'typeorm';

import {BaseEntity} from '../helpers';
import {Visit} from "./visit.entity";

@Entity('visitors')
export class Visitor extends BaseEntity {
  @Column({type: 'varchar', length: 200})
  name: string;

  @Column({type: 'varchar', length: 200})
  document: string;

  @OneToMany(() => Visit, visit => visit.visitor)
  visits: Visit[]
}
