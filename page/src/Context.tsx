import React from "react";
import { readAlbum } from "./apis/get/readAlbum";
import { readCancion } from "./apis/get/readCanciones";
import { readSinger } from "./apis/get/readSingers";


const Context = React.createContext({});

export function Provedor({ children }: Children) {
    const [albumes, setAlbum] = React.useState<Album[]>([]);
    const [canciones, setCanciones] = React.useState<CancionAlbumImage[]>([]);
    const [singers, setSinger] = React.useState<Cantante[]>();

    React.useEffect(() => {
        readAlbum()
            .then(data => setAlbum(data));
    }, []);
    React.useEffect(() => {
        readCancion()
            .then(data => setCanciones(data));
    }, []);
    React.useEffect(() => {
        readSinger()
            .then(data => setSinger(data));
    }, []);
    console.log(singers);
    return (
        <Context.Provider value={{
            albumes,
            canciones,
            singers
        }}>
            {children}
        </Context.Provider>
    );
}

export const UseContexto = () => React.useContext(Context) as Contexto;