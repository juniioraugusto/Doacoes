import DB from './db';
import { CustomersController } from './controlador/CustumersController';
import { DoacoesController } from './controlador/DoacoesController';
import server from './server';
import promptSync from 'prompt-sync';


const prompt = promptSync();

async function main(): Promise<void> {

  await DB.initialize();

  server.start();

  menu();
}

main();

async function menu () {

  let customersController = new CustomersController();
  let doacoesController = new DoacoesController();

  let input: string = '';

  do {
    console.clear();
    console.log('1 - Listar usuários');
    console.log('2 - Cadastrar novo usuário');
    console.log('3 - Editar usuário');
    console.log('4 - Excluir usuário');
    console.log('5 - Listar doações');
    console.log('6 - Cadastrar doação');
    console.log('7 - Editar doação');
    console.log('8 - Excluir doação');
    console.log('0 - Sair');
    input = prompt('Selecione a opção desejada:');

    switch (input) {
      case '1':
        await customersController.list();
        break;
      case '2':
        await customersController.create();
        break;
      case '3':
        await customersController.edit();
        break;
      case '4':
        await customersController.delete();
        break;
      case '5':
        await doacoesController.list();
        break;
      case '6':
        await doacoesController.create();
        break;
      case '7':
        await doacoesController.edit();
        break;
      case '8':
        await doacoesController.delete();
        break;
    }

    prompt('Pressione enter para continuar');
  } while (input != '0');
}
2
