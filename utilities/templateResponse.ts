import { Response } from 'express';


export function templateResponse(res: Response, results: Object, statusCode: number = 200, message = '') {
    const respuesta = {
        statusCode,
        message,
        results
    }
    res.status(statusCode).json(respuesta);
}