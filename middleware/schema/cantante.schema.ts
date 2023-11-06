import joi from 'joi';

const name = joi.string().min(1).required();
const birthday = joi.date().required().required();
const nationality = joi.string().min(1).required();
const url_cantante = joi.string().min(1).max(5000).required();
const albumes = joi.array().items(joi.string().uuid()).required();
const id_cantante = joi.string().uuid().required();


export const addSchemaSinger = joi.object({name, birthday, nationality, url_cantante, albumes});
export const idSechemaSinger = joi.object({id_cantante});