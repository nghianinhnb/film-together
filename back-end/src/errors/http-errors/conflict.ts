import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class ConflictError extends BaseHttpError {
    statusCode = 409;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, ConflictError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}