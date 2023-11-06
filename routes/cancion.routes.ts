import express from 'express';
import { CancionController } from '../controller/cancion.controller';

export const routecancion = express.Router();

const controller = new CancionController();

routecancion.get('/', controller.leerCanciones);

routecancion.get('/:id_cancion', controller.leerCancionPk);

routecancion.post('/', controller.agregarCancion);

routecancion.delete('/:id_cancion', controller.eliminarCancion);

routecancion.put('/:id_cancion', controller.editarCancion);