import express from 'express';

import { auth, checkAdmin } from '../../middlewares';
import { userControllers } from './user.controller';

const router = express.Router();

router.get('/me',
        auth,
        userControllers.me
    );

router.get('/user', 
        auth,
        checkAdmin,
        userControllers.getAll
    );

router.get('/user/:id', 
        auth,
        checkAdmin,
        userControllers.getOne
    );

router.post('/sign-in', userControllers.signIn);

router.post('/sign-up', userControllers.signUp);

router.post('/refresh-token',
        auth,
        userControllers.refreshToken
    );

router.put('/me',
        auth,
        userControllers.update
    );


export { router as userRouter };
