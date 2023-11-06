import jwt from 'jsonwebtoken';

export function crearToken(data:Object){
    const objeto = {...data};
    return jwt.sign(objeto, 'hola');
}
export function verificarToken(token:string){
    const objeto = jwt.verify(token, 'hola');
    return objeto;
}