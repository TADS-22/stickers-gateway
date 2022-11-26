import { NextFunction, Request, Response } from "express";
import { apiLogger } from "../../commons/logger";
import { tokenHelper } from "../helpers";

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  try {
    const authData = tokenHelper.validateToken(token)
    req.headers['auth-user-id'] = authData.userId

    next()
  } catch (error: Error | any) {
    apiLogger.error('Erro ao validar token de acesso!', {
      exception: error,
      local: 'tokenHelper',
      method: 'validateAuth'
    })
    
    throw error;
  }

}