import { WhitelistItem } from "./interface";

export const apiWhitelist: WhitelistItem[] = [
  { method: 'POST', path: '/api/user' },
  { method: 'POST', path: '/api/user/login' },
]
