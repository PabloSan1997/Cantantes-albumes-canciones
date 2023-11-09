import { UseContexto } from "../Context";
import { CajaAlbum } from "../components/CajaAlbum";
import { CajaCancion } from "../components/CajaCancion";
import { CajaSinger } from "../components/CajaSinger";
import { Seccion } from "../components/Seccion";



export function Home() {
  const {canciones, singers, albumes} = UseContexto();
  return (
    <>
        <Seccion titulo="Cantantes" myClass="singer">
          {singers.map(p=>(
            <CajaSinger key={p.id_cantante} {...p}/>
          ))}
        </Seccion>
        <Seccion titulo="Album" myClass="album">
          {albumes.map(p=>(
            <CajaAlbum key={p.id_album} {...p}/>
          ))}
        </Seccion>
        <Seccion titulo="Canciones" myClass="cancion">
          {canciones.map(p=>(
            <CajaCancion key={p.id_cancion} {...p}/>
          ))}
        </Seccion>
    </>
  );
}
