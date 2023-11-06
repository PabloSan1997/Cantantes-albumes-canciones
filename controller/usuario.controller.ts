import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import { UsuarioServicio } from '../services/usuario.service';
import { templateResponse } from '../utilities/templateResponse';
const servicio = new UsuarioServicio();
export class UsuarioController {
    async agregarUsuario(req: Request, res: Response, next: NextFunction) {
        const body = req.body as UsuarioReq;
        const data = await servicio.addUser(body);
        templateResponse(res, data, 201, 'Usuario agregado con exito');
    }
    async loginUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body as LoginUser;
            console.log(body);
            const data = await servicio.loginUser(body);
            templateResponse(res, data, 200);
        } catch (error) {
            if(typeof error == 'string') next(Boom.badData(error));
            else next(Boom.badImplementation());
        }
    }
}