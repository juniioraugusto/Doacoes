import { Doacoes } from '../models/Doacao';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class DoacoesController {

  async list () {
    let doacoes = await Doacoes.find();
    console.table(doacoes);
  }

  async create () {
    let idDoador: string = String(prompt('Qual o ID do doador?'));
    let localDoacao: string = prompt('Qual o local da doação? , CD 1 , CD 2 ou CD 3?');
    let itemDoacao: string = prompt('Qual o item da doação?');
    let quantidade: number = Number(prompt('Qual a quantidade da doação?'));

    let doacao: Doacoes = await Doacoes.create({
      idDoador,
      localDoacao,
      itemDoacao,
      quantidade,
    }).save();

    console.log(`Doação ID #${doacao.id} criada com sucesso!`);
  }

  async edit () {
    let id: number = Number(prompt('Qual o ID da doação?'));
    let doacao: Doacoes | null = await Doacoes.findOneBy({ id: id });
    if (doacao) {
      doacao.idDoador = prompt(`ID do doador (${doacao.idDoador}):`);
      doacao.localDoacao = prompt(`Local da doação (${doacao.localDoacao}):`);
      doacao.itemDoacao = prompt(`Item da doação (${doacao.itemDoacao}):`);
      doacao.quantidade = Number(prompt(`Quantidade da doação (${doacao.quantidade}):`));
      doacao.save();
      console.log('Doação atualizada com sucesso!');
    }
  }

  async delete () {
    let id: number = Number(prompt('Qual o ID da doação?'));
    let result = await Doacoes.delete({ id: id });
    if (result.affected && result.affected > 0) {
      console.log('Doação deletada com sucesso!');
    }
  }
}
