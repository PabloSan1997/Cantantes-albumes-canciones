import express from 'express';
import { CantanteController } from '../controller/cantante.controller';

const controller = new CantanteController();
export const routecantantes = express.Router();

routecantantes.get('/', controller.leerCantantes);
routecantantes.get('/:id_cantante', controller.leerCantantePK);
routecantantes.post('/', controller.agregarCantantes);