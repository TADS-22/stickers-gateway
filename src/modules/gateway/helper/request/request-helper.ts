import { Request } from "express";
import { apiWhitelist } from "./constants";
import { WhitelistItem } from "./interface";

export const isWhitelisted = (req: Request): boolean => {
  const search = {
    method: req.method,
    path: req.url,
  } as WhitelistItem

  return apiWhitelist.some(item => 
    item.method === search.method && item.path === search.path)
}
