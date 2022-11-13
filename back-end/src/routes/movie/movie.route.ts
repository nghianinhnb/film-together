import express from 'express';

import { auth, checkAdmin, paginationValidator, parsePagination } from '../../middlewares';
import { movieControllers } from './movie.controller';

const router = express.Router();

router.get('/movie/:movieName', movieControllers.getOne);

router.get('/movie',
        paginationValidator,
        parsePagination,
        movieControllers.getAll
    );

router.get('/streaming-movie/:movieName', movieControllers.streamingMovie);

router.post('/upload-movie/:movieName',
        auth,
        checkAdmin,
        movieControllers.uploadMovie
    );

    
export { router as movieRouter };
