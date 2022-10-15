import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { BaseHttpError } from "../errors";


const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BaseHttpError)
        return res.status(err.statusCode).send(err.respond());

    console.error(err);
}


export default errorHandler;
