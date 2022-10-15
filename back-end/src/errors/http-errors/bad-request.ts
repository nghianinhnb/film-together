import { RESULT } from "../../config/enum";
import { BaseHttpError } from "./base-http-error";


export class BadRequestError extends BaseHttpError {
    statusCode = 400;
  
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
  
    respond() {
        return {
            result: RESULT.fail,
            reason: this.message,
        };
    }
}