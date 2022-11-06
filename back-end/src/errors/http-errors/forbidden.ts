import { RESULT, ERROR_VI } from "../../initialize/enum";
import { BaseHttpError } from "./base-http-error";


export class ForbiddenError extends BaseHttpError {
    statusCode = 403;
  
    constructor() {
        super(ERROR_VI.PERMISISON_DENIED);

        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            message: this.message,
        };
    }
}
