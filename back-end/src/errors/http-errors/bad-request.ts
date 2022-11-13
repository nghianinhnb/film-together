import { ValidationError } from 'express-validator';

import { BaseHttpError } from "./base-http-error";
import { RESULT, ERROR_VI } from "../../types/enum";


export class BadRequestError extends BaseHttpError {
    statusCode = 400;
  
    constructor(public errors: ValidationError[]) {
        super(ERROR_VI.MISSING_PARAMETERS);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
  
    respond() {
        let message = ''

        for (const e of this.errors) {
            message += `; ${e.msg}`
        }

        return {
            result: RESULT.fail,
            message: message,
        };
    }
}
