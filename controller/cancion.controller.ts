import { Request, Response} from 'express';
import { CancionServicio } from '../services/cancion.service';

const servicio = new CancionServicio();

export class CancionController{
    async leerCanciones(req:Request, res:Response){
        const datos = await servicio.leerDatos();
        console.log('hola');
        res.json(datos);
    }
    async leerCancionPk(req:Request, res:Response){
        const {id_cancion} = req.params as {id_cancion:string};
        const datos = await servicio.leerDatoPk(id_cancion);
        res.json(datos);
    }
    async agregarCancion(req:Request, res:Response){
        const cuerpo = req.body as CancionReq;
        const dato = await servicio.agregarDatos(cuerpo);
        res.status(201).json({results:dato});
    }
}