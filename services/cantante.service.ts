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
    async eliminarDatos(id_cantante:string){
        const repositorio = AppdataSource.getRepository(Cantante);
        const cantante = await repositorio.findOneBy({id_cantante});
        if(!!cantante){
            cantante.albumes=[];
            repositorio.manager.save(cantante);
            await repositorio.delete({id_cantante});
        }
    }
    async editarCantante(cantante:CantanteReq, id_cantante:string){
        const repositorio = AppdataSource.getRepository(Cantante);
        const reAlbum = AppdataSource.getRepository(Album);
        let buscar2 = await repositorio.findOne({where:{id_cantante}, relations:{albumes:true}});
        if(!buscar2) throw 'No se encontro componente';
        if(cantante.albumes.length!=0){
            buscar2.albumes=[];
            await repositorio.manager.save(buscar2);
        }
        const albumes = await Promise.all(cantante.albumes.map(async p =>{
            const al = await reAlbum.findOneBy({id_album:p});
            if(al==null) throw 'No se encontraron albumes';
            return al;
        }));
        let buscar = await repositorio.findOne({where:{id_cantante}, relations:{albumes:true}}) as Cantante;
        buscar.nationality=cantante.nationality;
        buscar.birthday=cantante.birthday;
        buscar.name=cantante.name;
        buscar.url_cantante = cantante.url_cantante;
        buscar.albumes = albumes;

        await repositorio.manager.save(buscar);
        return buscar;
    }
}