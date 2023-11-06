import express from 'express';
import { UsuarioController } from '../controller/usuario.controller';

const controller = new UsuarioController();

export const routerusuario = express.Router();

routerusuario.post('/create', controller.agregarUsuario);

routerusuario.post('/login', controller.loginUsuario);

routerusuario.post('/logintoken', controller.loginToken);