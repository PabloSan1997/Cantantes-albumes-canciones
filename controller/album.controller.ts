import { Request, Response} from 'express';
import { ServicioAlbum } from '../services/album.service';

const servicios = new ServicioAlbum();

export class ControladorAlbum{
    async leerAlbums(req:Request, res:Response){
        const data = await servicios.leerDatos();
        res.json(data);
    }
    async leerAlbumPK(req:Request, res:Response){
        const {id_album} = req.params as {id_album:string};
        const datos = await servicios.leerDatosPorPK(id_album);
        res.json(datos);
    }
    async crearAlbum(req:Request, res:Response){
        const album = await servicios.agregarDatos(req.body);
        res.status(201).json({result:album});
    }
}