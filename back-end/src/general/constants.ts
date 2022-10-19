import path from 'path';
import fs from 'fs';

export const rootPath = process.cwd();
export const moviePath = path.join(rootPath, `/movies`);
if (!fs.existsSync(moviePath)) fs.mkdirSync(moviePath);
