
export function CajaSinger({name, url_cantante}:Cantante){
    return(
        <div className="caja caja-cantante">
            <img src={url_cantante} alt={name} className="foto" />
            <h3>{name}</h3>
        </div>
    );
}