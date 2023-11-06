import joi from 'joi';


const name = joi.string().min(1);
const release = joi.date();
const url_album = joi.string().min(1);
const id_album = joi.string().uuid().min(1).required();

export const addScemaAlbum = joi.object({
    name:name.required(),
    release:release.required(),
    url_album:url_album.required()
});

export const idSchemaAlbum = joi.object({id_album});