

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

interface UsuarioReq {
    name: string,
    email: string,
    password: string
}
interface LoginUser {
    email: string,
    password: string
}

interface TokenReq {
    admin: boolean,
    email: string,
    iat: number
}
