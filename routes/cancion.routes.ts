import express from 'express';
import { CancionController } from '../controller/cancion.controller';

export const routecancion = express.Router();

const controller = new CancionController();

routecancion.get('/', controller.leerCanciones);

routecancion.post('/', controller.agregarCancion);