import { NextFunction, Request, Response } from "express";
import httpProxy from 'express-http-proxy'
import { apiEnv } from "../../commons/env/config-env";

const stickersApiProxy = httpProxy(`http://${apiEnv.stickers.host}:${apiEnv.stickers.port}`)

export const handleStickersApi = (req: Request, res: Response, next: NextFunction) => {
  const urlMatcher = new RegExp(apiEnv.stickers.pathPattern)
  
  if (urlMatcher.test(req.url)) {
    stickersApiProxy(req, res, next)
    return
  }

  next()
}
