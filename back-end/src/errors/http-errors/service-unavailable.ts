import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class ServiceUnavailableError extends BaseHttpError {
    statusCode = 503;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}
