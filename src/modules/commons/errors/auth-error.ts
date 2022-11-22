import { StatusCodes } from "http-status-codes";
import { DefaultError } from "./default-error";

export class AuthError extends DefaultError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED)
  }
}