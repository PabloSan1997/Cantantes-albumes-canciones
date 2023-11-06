import jwt from 'jsonwebtoken';
import { variables } from './variables';

export function crearToken(data:Object){
    const objeto = {...data};
    if(!variables.word) throw 'Problemas con el inicio de secion';
    return jwt.sign(objeto, variables.word);
}
export function verificarToken(token:string){
    if(!variables.word) throw 'Problemas con el inicio de secion';
    const objeto = jwt.verify(token, variables.word);
    return objeto;
}