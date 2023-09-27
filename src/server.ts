import express, { Express , Request , Response} from 'express';
import cors from 'cors';
import { Customer } from './models/Customer';

let server: Express = express();

server.use(cors());
server.use(express.json());

server.get('/customers', async (req: Request , res: Response): Promise<Response> => {
  let users: Customer[] = await Customer.find();

  return res.status(200).json(users);
});

server.post('customers', async (req: Request , res: Response): Promise<Response> => {
  let body = req.body;

  let usuario: Customer = await Customer.create({
    name: body.name,
    telefone: body.telefone,
    situacao: body.situacao

  }).save();
  return res.status(200).json(usuario);
})

server.put('/usuarios/:id' , async (req: Request , res: Response): Promise<Response> => {
  let body = req.body
  let id = Number(req.params.id);

  let usuario: Customer|null = await Customer.findOneBy({ id });
  if (! usuario) {
    return res.status(422).json({ error: ' Usuario não encontrado!'});
  }
  usuario.name = body.nome;
  usuario.telefone = body.telefone;
  usuario.situacao = body.situacao;
  await usuario.save();

  return res.status(200).json(usuario);
})

server.delete('/usuarios/:id', async (req: Request , res: Response): Promise<Response> => {
  let id= Number(req.params.id);

  let usuario: Customer|null = await Customer.findOneBy({ id })
  if (! usuario) {
    return res.status(422).json({ error: 'Usuario não encontrado!'});
  }
  usuario.remove();

  return res.status(200).json();
});

server.get('/usuarios/:id', async (req: Request , res: Response): Promise<Response> => {
  let id = Number(req.params.id);

  let usuario: Customer|null = await Customer.findOneBy({ id });
  if (! usuario) {
    return res.status(422).json({error: 'usuario não encontrado'});
  }
  return res.status(200).json(usuario)
});

export default {
  start() {
    server.listen(3000, () => {
      console.log('Server started on port 3000!')
    });
  }
};
