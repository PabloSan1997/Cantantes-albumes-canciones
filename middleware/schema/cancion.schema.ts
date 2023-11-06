import joi from 'joi';

const name = joi.string().min(1).required();
const song_duration = joi.string().min(1).required();
const id_album = joi.string().uuid().min(1).required();
const id_cancion = joi.string().uuid().min(1).required();

export const addSchemaCancion = joi.object({name, song_duration, id_album});
export const idSchemaCancion = joi.object({id_cancion});