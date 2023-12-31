import express, {Express} from 'express';
import { albumroutes } from './album.routes';
import { routecancion } from './cancion.routes';
import { routecantantes } from './cantante.routes';
import { routerusuario } from './usuario.routes';


export function createApi(app:Express){
    const main = express.Router();
    app.use('/api/v1', main);
    main.use('/album', albumroutes);
    main.use('/song', routecancion);
    main.use('/singer', routecantantes);
    main.use('/user', routerusuario);
}