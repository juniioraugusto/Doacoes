import { Customer } from '../models/Customer';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class CustomersController {

  async list () {
    let customers = await Customer.find();
    console.table(customers);
  }

  async create () {
    let name: string = prompt('Nome:');
    let telefone: string = prompt('Telefone::');
    let situacao: string = prompt('Situaçao:');

    let customer: Customer = await Customer.create({
      name,
      telefone,
      situacao,
    }).save();

    console.log(`Cliente ID #${customer.id} criado com sucesso!`);
  }

  async edit () {
    let id: number = Number(prompt('Qual o ID?'));
    let customer: Customer | null = await Customer.findOneBy({ id: id });
    if (customer) {
      customer.name = prompt(`Nome (${customer.name}):`);
      customer.telefone = prompt(`telefone (${customer.telefone}):`);
      customer.situacao = prompt(`Situacao(${customer.situacao}):`);
      customer.save();
      console.log('Cliente atualizado com sucesso!');
    }
  }

  async delete () {
    let id: number = Number(prompt('Qual o ID?'));
    let result = await Customer.delete({ id: id });
    if (result.affected && result.affected > 0) {
      console.log('Cliente deletado com sucesso!');
    }
  }
}

