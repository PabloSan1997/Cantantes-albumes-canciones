import { AppdataSource } from "../database/confit";
import { Album } from "../database/models/Album";


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
            relations: { canciones: true, cantantes:true }
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
}