import express from 'express';
import { CantanteController } from '../controller/cantante.controller';
import { joiHandle } from '../middleware/joiHandle';
import { addSchemaSinger, idSechemaSinger } from '../middleware/schema/cantante.schema';
import { usuarioHandle } from '../middleware/usuarioHandle';

const controller = new CantanteController();
export const routecantantes = express.Router();

routecantantes.get('/', controller.leerCantantes);

routecantantes.get('/:id_cantante',
    joiHandle(idSechemaSinger, 'params'),
    controller.leerCantantePK);

routecantantes.delete('/:id_cantante',
    usuarioHandle,
    joiHandle(idSechemaSinger, 'params'),
    controller.eliminarCantante);

routecantantes.put('/:id_cantante',
    usuarioHandle,
    joiHandle(idSechemaSinger, 'params'),
    joiHandle(addSchemaSinger, 'body'),
    controller.editarCantante);

routecantantes.post('/',
    usuarioHandle,
    joiHandle(addSchemaSinger, 'body'),
    controller.agregarCantantes);