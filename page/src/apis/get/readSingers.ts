import { baseApi } from "../baseUrl";

export async function readSinger():Promise<Cantante[]>{
    const ft = await fetch(`${baseApi}/singer`,{
        method:'GET',
        headers:{
            advert:import.meta.env.VITE_ADVERT
        }
    });
    const data = await ft.json();
    return data.results;
}

export async function readSingerByPk(id:string):Promise<CantanteRelacion> {
    const ft = await fetch(`${baseApi}/singer/${id}`,{
        method:'GET',
        headers:{
            advert:import.meta.env.VITE_ADVERT
        }
    });
    const data = await ft.json();
    return data.results;
}