import { AppdataSource } from "../database/confit";
import { Album } from "../database/models/Album";
import { Cantante } from "../database/models/Cantante";


export class SingerServicios{
    async leerDatos(){
        const repositorio = AppdataSource.getRepository(Cantante);
        const datos = await repositorio.find();
        return datos;
    }
    async leerUnDatoPk(id_cantante:string){
        const repositorio = AppdataSource.getRepository(Cantante);
        const dato = await repositorio.findOne({
            where:{id_cantante},
            relations:{albumes:true}
        });
        if(dato==null) throw 'No se econtro cancion';
        return dato;
    }
    async agregarDatos(cantanteNuevo:CantanteReq){
        const repositorio = AppdataSource.getRepository(Cantante);
        const reAlbum = AppdataSource.getRepository(Album);
        const albumes = await Promise.all(cantanteNuevo.albumes.map(async p =>{
            const al = await reAlbum.findOneBy({id_album:p});
            if(al==null) throw 'No se encontraron albumes';
            return al;
        }));
        const {name, nationality, birthday, url_cantante} = cantanteNuevo;
        const cantante = repositorio.create({name, nationality, birthday, url_cantante});
        cantante.albumes=albumes;
        await repositorio.manager.save(cantante);
        return cantante;
    }
}