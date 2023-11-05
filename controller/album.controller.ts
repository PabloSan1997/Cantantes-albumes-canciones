import { Request, Response, NextFunction } from 'express';
import { ServicioAlbum } from '../services/album.service';
import { templateResponse } from '../utilities/templateResponse';
import Boom from '@hapi/boom';

const servicios = new ServicioAlbum();

export class ControladorAlbum {
    async leerAlbums(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await servicios.leerDatos();
            templateResponse(res, data);
        } catch (error) {
            next(Boom.badImplementation());
        }
    }
    async leerAlbumPK(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_album } = req.params as { id_album: string };
            const datos = await servicios.leerDatosPorPK(id_album);
            templateResponse(res, datos);
        } catch (error) {
            const message = typeof error === 'string' ? Boom.notFound(error) : Boom.badImplementation();
            next(message);
        }
    }
    async crearAlbum(req: Request, res: Response, next: NextFunction) {
        try {
            const album = await servicios.agregarDatos(req.body);
            templateResponse(res, album, 201, 'New data added');
        } catch (error) {
            next(Boom.badImplementation());
        }
    }
    async borrarAlbum(req: Request, res: Response, next: NextFunction){
        try {
            const { id_album } = req.params as { id_album: string };
            await servicios.eliminarAlbum(id_album);
            res.status(204).send();
        } catch (error) {
            next(Boom.notImplemented())
        }
    }
}