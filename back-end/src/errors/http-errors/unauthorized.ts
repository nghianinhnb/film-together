import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class UnauthorizedError extends BaseHttpError {
    statusCode = 401;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}
