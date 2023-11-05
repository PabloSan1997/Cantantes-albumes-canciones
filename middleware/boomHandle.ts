import {Boom} from "@hapi/boom";
import {Request, Response, NextFunction} from 'express';
import { templateResponse } from "../utilities/templateResponse";

export function boomHandle(err:Boom, req:Request, res:Response, next:NextFunction){
    if(err.isBoom){
        const {payload} = err.output;
        templateResponse(res, payload, payload.statusCode, 'Error');
    }
    next(err);
}