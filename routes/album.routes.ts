import express from 'express';
import { ControladorAlbum } from '../controller/album.controller';

const controlador = new ControladorAlbum();
export const albumroutes = express.Router();

albumroutes.get('/', controlador.leerAlbums);
albumroutes.get('/:id_album', controlador.leerAlbumPK);
albumroutes.post('/', controlador.crearAlbum);