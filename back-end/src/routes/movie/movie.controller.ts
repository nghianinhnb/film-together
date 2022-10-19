import { Request, Response } from 'express';

import {Movie} from '../../models';
import { checkAdmin } from '../../middlewares';
import { Controller } from '../../general/interface';

import { moviePath } from '../../general/constants';
import { RESULT } from '../../general/enum';
import { saveStreamingFile, sendStreamingMovie } from '../../services/file-stream.service';
import { BadRequestError, NotFoundError } from '../../errors';


export const movieControllers: Controller = {
    // GET Request
    // get metadata
    getAll: [
        async (req: Request, res: Response) => {
            const allMovieMetadata = await Movie.find({});

            res.send({
                result: RESULT.success,
                movieMetaData: allMovieMetadata,
            })
        }
    ],

    getOne: [
        async (req: Request, res: Response) => {
            const movieName = req.params.movieName;

            const thatMovieMetadata = await Movie.findOne({name: movieName});

            res.send({
                result: RESULT.success,
                movieMetaData: thatMovieMetadata,
            })
        }
    ],

    // streaming
    streamingMovie: [
        async (req: Request, res: Response) => {
            const movieName = req.params.movieName;

            // Get Movie Info from database
            const movieMetaData = await Movie.findOne({name: movieName});
            if (movieMetaData === null) throw new NotFoundError();

            sendStreamingMovie(req, res, movieMetaData);
        }
    ],


    // POST Request
    uploadMovie: [
        // checkAdmin,
        async (req: Request, res: Response) => {
            const movieName = req.params.movieName;
            
            const savedMoviePath = await saveStreamingFile(req, `${moviePath}\\${movieName}`)

            const movieSize = parseInt(req.headers['content-length']!);

            const movie = await Movie.create({
                name: movieName,
                path: savedMoviePath,
                size: movieSize,
            });

            res.status(201).send({
                result: RESULT.success,
                movie: movie,
            })
        }
    ],
}
