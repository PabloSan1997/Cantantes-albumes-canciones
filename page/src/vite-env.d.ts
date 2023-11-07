/// <reference types="vite/client" />


//-----------API----------------
interface AlbumReq {
    name: string;
    release: Date;
    url_album: string;
}
interface CancionReq {
    name: string,
    song_duration: string,
    id_album: string
}

interface CantanteReq {
    name: string,
    birthday: Date,
    nationality: string
    url_cantante: string,
    albumes: string[]
}


interface LoginUser {
    email: string,
    password: string
}

interface TokenReq {
    admin: boolean,
    email: string
}
//--------------------------------

//-------------datos------------
interface Album {
    id_album: string,
    name: string,
    release: date,
    url_album: string
}
interface AlbumRelations extends Album{
    canciones:Cancion[],
    cantantes:Cantante[]
}
interface Cancion {
    id_cancion: string,
    name: string,
    song_duration: string
}
interface CancionAlbumImage extends Cancion{
    url_album: string;
}
interface CancionRelacion extends Cancion{
    album: Album
}
interface Cantante {
    id_cantante:string,
    name:string,
    birthday:Date,
    nationality:string,
    url_cantante:string
}
interface CantanteRelacion extends Cantante{
    albumes:Album[]
}
//-------Context---------
type Children = {
    children:JSX.Element|JSX.Element[]
}
type Contexto={
    albumes:Album[],
    canciones:CancionAlbumImage[],
    singers:Cantante[]
}