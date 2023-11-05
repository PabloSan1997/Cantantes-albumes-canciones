import { Request, Response} from 'express';
import { ServicioAlbum } from '../services/album.service';
import { templateResponse } from '../utilities/templateResponse';

const servicios = new ServicioAlbum();

export class ControladorAlbum{
    async leerAlbums(req:Request, res:Response){
        const data = await servicios.leerDatos();
        templateResponse(res, data);
    }
    async leerAlbumPK(req:Request, res:Response){
        const {id_album} = req.params as {id_album:string};
        const datos = await servicios.leerDatosPorPK(id_album);
        templateResponse(res, datos);
    }
    async crearAlbum(req:Request, res:Response){
        const album = await servicios.agregarDatos(req.body);
        templateResponse(res, album, 201, 'New data added');
    }
}