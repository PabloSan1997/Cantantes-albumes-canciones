import { baseApi } from "../baseUrl";

export async function readAlbum():Promise<Album[]>{
    const ft = await fetch(`${baseApi}/album`,{
        method:'GET',
        headers:{
            advert:import.meta.env.VITE_ADVERT
        }
    });
    const data = await ft.json();
    return data;
}

export async function readAlbumByPk(id:string):Promise<AlbumRelations> {
    const ft = await fetch(`${baseApi}/album/${id}`,{
        method:'GET',
        headers:{
            advert:import.meta.env.VITE_ADVERT
        }
    });
    const data = await ft.json();
    return data;
}