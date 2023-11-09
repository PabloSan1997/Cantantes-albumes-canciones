

export function CajaCancion({name, url_album, song_duration}:CancionAlbumImage){

    return(
        <div className="caja-cancion caja">
            <img src={url_album} alt={name} className="foto" />
            <h3>{name}</h3>
            <span>{song_duration}</span>
        </div>
    );
}