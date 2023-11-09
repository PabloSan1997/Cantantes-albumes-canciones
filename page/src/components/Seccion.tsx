import '../estilos/seccion.scss';

type Hijos = {
    titulo: string,
    children: JSX.Element | JSX.Element[],
    myClass:string
}

export function Seccion({ titulo, children, myClass }: Hijos) {
    return (
        <div className={"seccion "+myClass}>
            <h2>{titulo}</h2>
            <div className="cajas">
                {children}
            </div>
        </div>
    );
}