import {Request, Response, NextFunction} from 'express';
import { variables } from '../utilities/variables';
import Boom from '@hapi/boom';

export function advertHandle(req: Request, res:Response, next:NextFunction){
    const {advert} = req.headers;
    if(advert === variables.header_advert){
        next();
    }else{
        next(Boom.badRequest('No tienes permiso'));
    }
}