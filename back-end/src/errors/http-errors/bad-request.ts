import { RESULT, ERROR_VI } from "../../initialize/enum";
import { BaseHttpError } from "./base-http-error";


export class BadRequestError extends BaseHttpError {
    statusCode = 400;
  
    constructor(message?: string) {
        super(message || ERROR_VI.MISSING_PARAMETERS);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            message: this.message,
        };
    }
}