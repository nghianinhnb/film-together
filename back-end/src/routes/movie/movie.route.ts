import express from 'express';
import { movieControllers } from './movie.controller';

const router = express.Router();

router.get('/movie', movieControllers.getAll);
router.get('/movie/:movieName', movieControllers.getOne);

router.get('/streaming-movie/:movieName', movieControllers.streamingMovie);

router.post('/upload-movie/:movieName', movieControllers.uploadMovie);

export { router as movieRouter };
