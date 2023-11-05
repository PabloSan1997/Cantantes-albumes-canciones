import { AppdataSource } from "../database/confit";
import { Album } from "../database/models/Album";
import { Cancion } from "../database/models/Cancion";


export class CancionServicio{
    async leerDatos(){
        const repositorio = AppdataSource.getRepository(Cancion);
        const datos = await repositorio.find();
        return datos;
    }
    async leerDatoPk(id_cancion:string){
        const repositorio = AppdataSource.getRepository(Cancion);
        const dato = await repositorio.findOneBy({id_cancion});
        if(dato==null) throw 'No se econtro cancion';
        return dato;
    }
    async agregarDatos(cancion_nueva:CancionReq){
        const repositorio = AppdataSource.getRepository(Cancion);
        const reAlbum = AppdataSource.getRepository(Album);
        const cancion = repositorio.create(cancion_nueva);
        const album = await reAlbum.findOneBy({id_album:cancion_nueva.id_album});
        if(album==null) throw 'No se encontro album';
        cancion.album = album;
        await repositorio.manager.save(cancion);
        return cancion;
    }
}