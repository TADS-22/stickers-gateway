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