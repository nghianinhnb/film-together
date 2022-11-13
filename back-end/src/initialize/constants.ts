import path from "path"
import { root } from "../utils"


const MOVIE_PATH = path.join(root(), 'movie')

const FFMPEG_PATH = path.join(root(), 'libs\\ffmpeg\\bin\\ffmpeg.exe')

const MAX_BYTES_PER_SECOND = 2000000

const PAGINATION = {
    LIMIT: {
        MIN: 0,
        MAX: 1000,
        DEFAULT: 100,
    }
}


export {
    MOVIE_PATH,
    FFMPEG_PATH,
    MAX_BYTES_PER_SECOND,
    PAGINATION,
}