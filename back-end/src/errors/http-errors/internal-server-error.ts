import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class InternalServerError extends BaseHttpError {
    statusCode = 500;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}
