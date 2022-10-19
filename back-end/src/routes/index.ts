import express, { Request, Response } from 'express';

import { userRouter } from './user/user.route';
import { movieRouter } from './movie/movie.route';

import { NotFoundError } from '../errors';


const routes = express.Router();

// Api router
routes.use(userRouter);
routes.use(movieRouter);

// Not Found
routes.all('*', (req: Request, res: Response) => {
    throw new NotFoundError();
});


export default routes;