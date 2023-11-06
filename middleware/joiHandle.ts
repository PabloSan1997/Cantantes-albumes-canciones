import Boom from '@hapi/boom';
import {Schema} from 'joi';
import {Request, Response, NextFunction} from 'express';

type Prop = 'body'|'params'|'headers';

export function joiHandle(esquema:Schema, porp:Prop){
    return async(req:Request, res:Response, next:NextFunction)=>{
        const data = req[porp];
        const {error} =  esquema.validate(data, {abortEarly:false});
        if(error) next(Boom.badRequest(error));
        else next();
    }
}