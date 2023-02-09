import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";

import {BaseEntity} from "../helpers";
import {Visitor} from "./visitor.entity";

@Entity('visits')
export class Visit extends BaseEntity {
  @Column({type: "varchar", length: 3})
  badge: string;

  @Column({type: "varchar", length: 20})
  secretary: string;

  @Column({type: "boolean"})
  status: boolean;

  @ManyToOne(() => Visitor, visitor => visitor.visits, {cascade: true})
  @JoinColumn({
    name: 'visitor_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_visitor'
  })
  visitor: Visitor
}