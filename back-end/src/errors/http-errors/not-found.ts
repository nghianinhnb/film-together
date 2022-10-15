import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class NotFoundError extends BaseHttpError {
    statusCode = 404;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}
