import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Doacoes } from "./Doacao";

@Entity('customers')
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public telefone: string;

  @Column()
  public situacao: string;
  static id: any;
  entrega: string;
  localEntrega: string;
  horarioEntrega: string;


 }
