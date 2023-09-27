import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";

@Entity('doacoes')
export class Doacoes extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'date',default:'NOW()' })
  public criadoEm: Date;

  @Column()
  public idDoador: string;

  @Column()
  public localDoacao: string;

  @Column()
  public itemDoacao: string;

  @Column()
  public quantidade: number;

  constructor() {
    super();
    this.criadoEm = new Date();
  }
}
