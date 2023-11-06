import { SingerServicios } from "../services/cantante.service";
import { NextFunction, Request, Response } from 'express';
import { templateResponse } from "../utilities/templateResponse";
import Boom from '@hapi/boom';

const servicios = new SingerServicios();

export class CantanteController {
    async leerCantantes(req: Request, res: Response, next: NextFunction) {
        try {
            const datos = await servicios.leerDatos();
            templateResponse(res, datos);
        } catch (error) {
            next(Boom.badImplementation());
        }
    }
    async leerCantantePK(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_cantante } = req.params as { id_cantante: string };
            const datos = await servicios.leerUnDatoPk(id_cantante);
            templateResponse(res, datos);
        } catch (error) {
            if (typeof error == 'string') next(Boom.notFound(error));
            else next(Boom.badImplementation());
        }
    }
    async agregarCantantes(req: Request, res: Response, next: NextFunction) {
        try {
            const cuerpo = req.body as CantanteReq;
            const datos = await servicios.agregarDatos(cuerpo);
            res.status(201).json({ results: datos });
        } catch (error) {
            if (typeof error == 'string') next(Boom.badRequest(error));
            else next(Boom.badImplementation());
        }
    }
    async eliminarCantante(req: Request, res: Response, next:NextFunction) {
        try {
            const { id_cantante } = req.params as { id_cantante: string };
            await servicios.eliminarDatos(id_cantante);
            res.status(204).send();
        } catch (error) {
            next(Boom.badImplementation());
        }
    }
    async editarCantante(req: Request, res: Response, next:NextFunction){
        // try {
            const { id_cantante } = req.params as { id_cantante: string };
            const body = req.body as CantanteReq;
            const dato = await servicios.editarCantante(body, id_cantante);
            templateResponse(res, dato);
        // } catch (error) {
        //     next(Boom.badImplementation());
        // }
    }
}