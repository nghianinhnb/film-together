import { Request, Response, NextFunction } from 'express'

import { PAGINATION } from '../initialize/constants'


declare module 'express' {
  interface Request {
    query: any
  }
}


function parsePagination (req: Request, res: Response, next: NextFunction) {
  if (!req.query.page) req.query.page = 0
  else req.query.page = parseInt(req.query.page, 10)

  if (!req.query.limit) req.query.limit = PAGINATION.LIMIT.DEFAULT
  else req.query.limit = parseInt(req.query.limit, 10)

  return next()
}


export {
  parsePagination
}
