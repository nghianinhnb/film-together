import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class ForbiddenError extends BaseHttpError {
    statusCode = 403;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}
