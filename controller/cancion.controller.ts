import { Request, Response, NextFunction } from 'express';
import { CancionServicio } from '../services/cancion.service';
import Boom from '@hapi/boom';
import { templateResponse } from '../utilities/templateResponse';

const servicio = new CancionServicio();

export class CancionController {
    async leerCanciones(req: Request, res: Response, next: NextFunction) {
        try {
            const datos = await servicio.leerDatos();
            templateResponse(res, datos);
        } catch (error) {
            next(Boom.notImplemented());
        }
    }
    async leerCancionPk(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_cancion } = req.params as { id_cancion: string };
            const datos = await servicio.leerDatoPk(id_cancion);
            templateResponse(res, datos);
        } catch (error) {
            if (typeof error == 'string') next(Boom.notFound(error));
            else next(Boom.notImplemented());
        }
    }
    async agregarCancion(req: Request, res: Response, next: NextFunction) {
        try {
            const cuerpo = req.body as CancionReq;
            const dato = await servicio.agregarDatos(cuerpo);
            templateResponse(res, dato, 201, 'Se agrego cancion con exito');
        } catch (error) {
            if (typeof error == 'string') next(Boom.notFound(error));
            else next(Boom.notImplemented());
        }
    }
    async eliminarCancion(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_cancion } = req.params as { id_cancion: string };
            await servicio.eliminarDatos(id_cancion);
            res.status(204).send();
        } catch (error) {
            next(Boom.notImplemented());
        }
    }
    async editarCancion(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body as EditarCancion;
            const { id_cancion } = req.params as { id_cancion: string }
            const dato = await servicio.editarCancion(body, id_cancion);
            templateResponse(res, dato, 200);
        } catch (error) {
            if(typeof error == 'string') next(Boom.badRequest(error));
            else next(Boom.badImplementation());
        }
    }
}