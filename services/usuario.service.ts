import { AppdataSource } from "../database/confit";
import { Usuario } from "../database/models/Usuario";
import { hash, compare } from 'bcrypt';
import { crearToken, verificarToken } from "../utilities/tokens";


export class UsuarioServicio {
    async addUser(newUser: UsuarioReq) {
        const repositorio = AppdataSource.getRepository(Usuario);
        newUser.password = await hash(newUser.password, 8);
        const usuario = repositorio.create(newUser);
        await AppdataSource.manager.save(usuario);
        const { id_usuario, name, email } = usuario;
        return { id_usuario, name, email };
    }
    async loginUser(user: LoginUser) {
        const repositorio = AppdataSource.getRepository(Usuario);
        const usuario = await repositorio.findOneBy({ email: user.email });
        if (!usuario) throw 'Usuario o contraseña incorrectos';
        const checar = await compare(user.password, usuario.password);
        if (!checar) throw 'Usuario o contraseña incorrectos';
        const datos = {
            admin: true,
            email: usuario.email
        }
        const token = crearToken(datos);
        return { token };
    }
    async loginToken(token: string) {
        const repositorio = AppdataSource.getRepository(Usuario);
        const data = verificarToken(token) as { admin: boolean, email: string, iat: number };
        const buscar = await repositorio.findOneBy({ email: data.email });
        if(!buscar) throw 'No se puede';
        return {token:crearToken(data), email:buscar.email}
    }
}