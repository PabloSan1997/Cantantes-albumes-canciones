import { baseApi } from "../baseUrl";

export async function readCancion():Promise<CancionAlbumImage[]>{
    const ft = await fetch(`${baseApi}/song`,{
        method:'GET',
        headers:{
            advert:import.meta.env.VITE_ADVERT
        }
    });
    const data = await ft.json();
    return data.results;
}

export async function readSingerByPk(id:string):Promise<CancionRelacion> {
    const ft = await fetch(`${baseApi}/song/${id}`,{
        method:'GET',
        headers:{
            advert:import.meta.env.VITE_ADVERT
        }
    });
    const data = await ft.json();
    return data.results;
}