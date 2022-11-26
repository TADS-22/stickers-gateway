import dotenv from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.test')})
} else {
  dotenv.config()
}

export const tokenEnv = {
  key: process.env.TOKEN_KEY ?? "",
}

export const apiEnv = {
  user: {
    host: process.env.USER_API_HOST ?? '',
    port: process.env.USER_API_PORT ?? '',
    pathPattern: process.env.USER_API_PATH_PATTERN ?? '',
  },
  stickers: {
    host: process.env.STICKERS_API_HOST ?? '',
    port: process.env.STICKERS_API_PORT ?? '',
    pathPattern: process.env.STICKERS_API_PATH_PATTERN ?? '',
  },
}