import { tiempoConvertir } from "../utilities/tiempo";


export function CajaAlbum({url_album, name, release}:Album){
    return(
        <div className="caja-album caja">
            <img src={url_album} alt="" className="foto" />
            <h3>{name}</h3>
            <span className="fecha">Lanzamiento: {tiempoConvertir(release)}</span>
        </div>
    );
}