import { SingerServicios } from "../services/cantante.service";
import { Request, Response} from 'express';

const servicios = new SingerServicios();

export class CantanteController{
    async leerCantantes(req:Request, res:Response){
        const datos = await servicios.leerDatos();
        res.json(datos);
    }
    async leerCantantePK(req:Request, res:Response){
        const {id_cantante} = req.params as {id_cantante:string};
        console.log(id_cantante);
        const datos = await servicios.leerUnDatoPk(id_cantante);
        res.json(datos);
    }
    async agregarCantantes(req:Request, res:Response){
        const cuerpo = req.body as CantanteReq;
        const datos = await servicios.agregarDatos(cuerpo);
        res.status(201).json({results:datos});
    }
}