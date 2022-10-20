import fs from 'fs';
import { Request, Response } from 'express';

import { BadRequestError } from '../errors';
import { MAX_BYTES__PER_SECOND } from '../config/streaming.config';


export const saveStreamingFile = (req: Request, filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const stream = fs.createWriteStream(filePath);

        // With the open - event, data will start being written
        // from the request to the stream's destination path
        stream.on('open', () => req.pipe(stream));


        // // Drain is fired whenever a data chunk is written.
        // // When that happens, print how much data has been written yet.
        // stream.on('drain', () => {
        //     const written = stream.bytesWritten;
        //     const total = parseInt(req.headers['content-length']!);
        //     const pWritten = ((written / total) * 100).toFixed(2);
        //     console.log(`Writting  ...  ${pWritten}%`);
        // });


        // When the stream is finished, print a final message
        // Also, resolve the location of the file to calling function
        stream.on('close', () => {
            console.log("Saving ... 100%");
            resolve(filePath)
        });


        // If something goes wrong, delete temp file and reject the primise
        stream.on('error', err => {
            if (!fs.existsSync(filePath)) fs.rmSync(filePath, {force: true});
            reject(err);
        });

    });
};


interface MovieMetadata {
    path: string;
    size: number;
    [propName: string]: any;
}

export const sendMovie = (req: Request, res: Response, movieMetadata: MovieMetadata) => {
    const videoRange = req.headers.range;
    if (!videoRange) throw new BadRequestError();

    const {path, size} = movieMetadata;

    const parts = videoRange.slice(6).split("-");
    const start = parseInt(parts[0], 10);
    const end = Math.min(
        start + MAX_BYTES__PER_SECOND,
        parts[1]
            ? parseInt(parts[1], 10)
            : size-1
    )

    const chunksize = (end-start) + 1;
    const head = {
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': `video/mp4`,
    };
    res.writeHead(206, head);
    
    const file = fs.createReadStream(path, {start, end});
    file.pipe(res);
}