import ffmpeg from 'fluent-ffmpeg';
import { Request } from 'express';

import { FFMPEG_PATH } from '../initialize/constants';


export const saveStreamingFile = (req: Request, savePath: string) => {
    const process = ffmpeg({source: req});
    process.setFfmpegPath(FFMPEG_PATH);
    process.saveToFile(savePath);
}
