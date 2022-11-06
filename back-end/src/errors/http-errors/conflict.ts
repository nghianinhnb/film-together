import { RESULT, ERROR_VI } from "../../initialize/enum";
import { BaseHttpError } from "./base-http-error";


export class ConflictError extends BaseHttpError {
    statusCode = 409;
  
    constructor() {
        super(ERROR_VI.ACCOUNT_EXISTS);

        Object.setPrototypeOf(this, ConflictError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            message: this.message,
        };
    }
}