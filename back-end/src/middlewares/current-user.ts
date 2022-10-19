import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
    admin?: boolean;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization && req.headers.authorization.match(/^Bearer (.*)$/);
    if (!token || !token[1]) return next();

    let jwt_payload = token[1];

    try {
        const payload = jwt.verify(
            jwt_payload,
            process.env.JWT_KEY!
        ) as UserPayload;
            
        req.user = payload;

    } catch (err) {}

    next();
};
