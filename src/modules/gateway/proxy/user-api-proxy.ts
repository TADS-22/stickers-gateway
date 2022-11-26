import { NextFunction, Request, Response } from "express";
import httpProxy from 'express-http-proxy'
import { apiEnv } from "../../commons/env/config-env";

const userApiProxy = httpProxy(`http://${apiEnv.user.host}:${apiEnv.user.port}`)

export const handleUserApi = (req: Request, res: Response, next: NextFunction) => {
  const urlMatcher = new RegExp(apiEnv.user.pathPattern)
  
  if (urlMatcher.test(req.url)) {
    userApiProxy(req, res, next)
    return
  }

  next()
}
