import path from "path"
import { root } from "../utils"


const MOVIE_PATH = path.join(root(), 'movie')
const MAX_BYTES_PER_SECOND = 2000000


export {
    MOVIE_PATH,
    MAX_BYTES_PER_SECOND,
}