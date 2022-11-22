import jwt from 'jsonwebtoken'
import { tokenEnv } from '../../commons/env'
import { AuthError } from '../../commons/errors'
import { apiLogger } from '../../commons/logger'
import { IAuthData } from '../../domain'

export const validateToken = (token: string | undefined): IAuthData => {
  if (!token) {
    throw new AuthError("Token inválido!")
  }

  try {
    const tokenContent = token.replace('Bearer ', '')
    const content = jwt.verify(tokenContent, tokenEnv.key) as any
    
    return {
      userId: content.userId,
      userName: content.userName,
      userLogin: content.userLogin,
    }
  } catch (error: Error | any) {
    apiLogger.error('Não foi possível validar o token informado', {
      exception: error,
      local: "token-helper",
      method: 'validateToken'
    })
    throw new AuthError("Não foi possível validar o token informado!")
  }
}