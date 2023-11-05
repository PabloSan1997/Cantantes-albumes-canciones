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
        const reAlbum = AppdataSource.getRepository(Album);
        const dato = await repositorio.findOne({
            where:{id_cantante}
        });
        if(dato==null) throw 'No se econtro cancion';
        const album = await reAlbum.find({where:{cantantes:dato}, relations:{canciones:true}});
        const mostrar = {
            ...dato,
            album
        }
        return mostrar;
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
    async eliminarDatos(id_cantante:string){
        const repositorio = AppdataSource.getRepository(Cantante);
        const reAlbum = AppdataSource.getRepository(Album);
        const cantante = await repositorio.findOneBy({id_cantante});
        if(!!cantante){
            const album = await reAlbum.findOne({where:{cantantes:cantante}, relations:{cantantes:true}})
            if(!!album) {
                album.cantantes = album.cantantes.filter(p=>p.id_cantante!=cantante.id_cantante);
                await reAlbum.manager.save(album);
            }
            await repositorio.delete({id_cantante});
        }
    }
}