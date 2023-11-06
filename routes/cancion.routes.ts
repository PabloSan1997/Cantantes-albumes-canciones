import express from 'express';
import { CancionController } from '../controller/cancion.controller';
import { joiHandle } from '../middleware/joiHandle';
import { addSchemaCancion, idSchemaCancion } from '../middleware/schema/cancion.schema';
import { usuarioHandle } from '../middleware/usuarioHandle';

export const routecancion = express.Router();

const controller = new CancionController();

routecancion.get('/', controller.leerCanciones);

routecancion.get('/:id_cancion', joiHandle(idSchemaCancion, 'params'), controller.leerCancionPk);

routecancion.post('/',
    usuarioHandle,
    joiHandle(addSchemaCancion, 'body'),
    controller.agregarCancion);

routecancion.delete('/:id_cancion',
    usuarioHandle,
    joiHandle(idSchemaCancion, 'params'),
    controller.eliminarCancion);

routecancion.put('/:id_cancion',
    usuarioHandle,
    joiHandle(idSchemaCancion, 'params'),
    joiHandle(addSchemaCancion, 'body'),
    controller.editarCancion);