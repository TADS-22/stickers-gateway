import { Request, Response, NextFunction } from 'express'
import { validateAuth } from '../../auth/middlewares'
import { requestHelper } from '../helper'

export const authRequest = (req: Request, res: Response, next: NextFunction) => {
  if (requestHelper.isWhitelisted(req)) {
    next()
  } else {
    validateAuth(req, res, next)
  }
}
