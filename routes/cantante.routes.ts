import express from 'express';
import { CantanteController } from '../controller/cantante.controller';
import { joiHandle } from '../middleware/joiHandle';
import { addSchemaSinger, idSechemaSinger } from '../middleware/schema/cantante.schema';

const controller = new CantanteController();
export const routecantantes = express.Router();

routecantantes.get('/', controller.leerCantantes);

routecantantes.get('/:id_cantante',
    joiHandle(idSechemaSinger, 'params'),
    controller.leerCantantePK);

routecantantes.delete('/:id_cantante',
    joiHandle(idSechemaSinger, 'params'),
    controller.eliminarCantante);

routecantantes.put('/:id_cantante',
    joiHandle(idSechemaSinger, 'params'),
    joiHandle(addSchemaSinger, 'body'),
    controller.editarCantante);

routecantantes.post('/',
    joiHandle(addSchemaSinger, 'body'),
    controller.agregarCantantes);