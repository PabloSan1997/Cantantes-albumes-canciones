import express from 'express';
import { ControladorAlbum } from '../controller/album.controller';
import { joiHandle } from '../middleware/joiHandle';
import { addScemaAlbum, idSchemaAlbum } from '../middleware/schema/album.schema';
import { usuarioHandle } from '../middleware/usuarioHandle';

const controlador = new ControladorAlbum();
export const albumroutes = express.Router();

albumroutes.get('/', controlador.leerAlbums);

albumroutes.get('/:id_album', joiHandle(idSchemaAlbum, 'params'), controlador.leerAlbumPK);

albumroutes.post('/',
    usuarioHandle,
    joiHandle(addScemaAlbum, 'body'),
    controlador.crearAlbum);

albumroutes.put('/:id_album',
    usuarioHandle,
    joiHandle(idSchemaAlbum, 'params'),
    joiHandle(addScemaAlbum, 'body'),
    controlador.editarAlbum);

albumroutes.delete('/:id_album',
    usuarioHandle,
    joiHandle(idSchemaAlbum, 'params'),
    controlador.borrarAlbum);