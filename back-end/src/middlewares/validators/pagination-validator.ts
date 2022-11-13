import { query } from 'express-validator'

import { PAGINATION } from '../../initialize/constants'
import { catchValidateError } from './catch-validate-error'


const paginationValidator = [
  query('page')
    .optional()
    .isInt({ min: 0 }).withMessage(`Page không hợp lệ`),

  query('limit')
    .optional()
    .isInt({ min: 0, max: PAGINATION.LIMIT.MAX }).withMessage(`Limit phải nhỏ hơn ${PAGINATION.LIMIT.MAX}`),

  catchValidateError,
]


export {
  paginationValidator,
}
