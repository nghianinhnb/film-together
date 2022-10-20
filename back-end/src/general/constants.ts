import path from 'path';
import fs from 'fs';

export const ROOT_PATH = process.cwd();
export const moviePath = path.join(ROOT_PATH, `/movies`);
if (!fs.existsSync(moviePath)) fs.mkdirSync(moviePath);

export const FFMPEG_PATH = path.join(ROOT_PATH, `/libs/ffmpeg/bin`);