import { Request, Response, NextFunction } from 'express';
import { verificarToken } from '../utilities/tokens';
import Boom from '@hapi/boom';
import { UsuarioServicio } from '../services/usuario.service';

const servicio = new UsuarioServicio();

export async function usuarioHandle(req: Request, res: Response, next: NextFunction) {
    try {
        const autorizacion = req.headers.auth as string;
        const permiso = verificarToken(autorizacion) as TokenReq;
        if(permiso.admin) next();
        else throw 'permiso';

    } catch (error) {
        next(Boom.badRequest('No tienes permos para esto'));
    }
    
}