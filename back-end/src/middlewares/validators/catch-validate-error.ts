import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { BadRequestError } from '../../errors';


function catchValidateError(req: Request, res: Response, next: NextFunction ) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new BadRequestError(errors.array());
    }

    next();
};


export {
    catchValidateError,
}