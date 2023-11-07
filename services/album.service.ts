import { AppdataSource } from "../database/confit";
import { Album } from "../database/models/Album";
import { Cancion } from "../database/models/Cancion";


export class ServicioAlbum {

    async leerDatos(): Promise<Album[]> {
        const repositorio = AppdataSource.getRepository(Album);
        const datos = await repositorio.find();
        return datos;
    }
    async leerDatosPorPK(id_album: string): Promise<Album> {
        const repositorio = AppdataSource.getRepository(Album);
        const datos = await repositorio.findOne({
            where: {
                id_album
            },
            relations:{canciones:true, cantantes:true}
        });
        if (!datos) throw 'No se encontro elemento';
        return datos;
    }
    async agregarDatos(nuevoElemento: AlbumReq): Promise<Album> {
        const repositorio = AppdataSource.getRepository(Album);
        const crearElemento = repositorio.create(nuevoElemento);
        await repositorio.manager.save(crearElemento);
        return crearElemento;
    }
    async eliminarAlbum(id_album:string){
        const repositorio = AppdataSource.getRepository(Album);
        const reCantion = AppdataSource.getRepository(Cancion);
        const album = await repositorio.findOne({where:{id_album}, relations:{canciones:true, cantantes:true}});
        if(!!album){
            const canciones = album.canciones;
            await Promise.all(canciones.map(async p=>{
                await reCantion.delete(p);
            }));
            album.cantantes=[];
            await repositorio.manager.save(album);
            await repositorio.delete({id_album});
        }
    }
    async editarAlbum(id_album:string, album:AlbumReq ){
        const repositorio = AppdataSource.getRepository(Album);
        const buscar = await repositorio.findOne({where:{id_album}});
        if(!buscar) throw 'No se encontro elemento';
        buscar.name = album.name;
        buscar.release=album.release;
        buscar.url_album = album.url_album;
        await repositorio.manager.save(buscar);
        return buscar;

    }
}