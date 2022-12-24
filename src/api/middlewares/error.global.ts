import { NextFunction, Request, Response } from 'express';
import { ApplicationError, InputError, NotFoundError } from '../../core/errors/errors';
import { logger } from '../../winston.logger';
 
function unexpectedErrorMiddleware(error: ApplicationError, request: Request, response: Response, next: NextFunction) {

  const status = getCode(error);
  const message = error.message;
  logger.error(error);
  response
    .status(status)
    .send({
      status,
      message,
    })
}

//INFO Pas super O de SOLID, mais permet de séparer la couche http des autres,
// la plupart des applications retourneront le code d'erreur quelque soit la couche pour ne pas gérer ça
function getCode(error: ApplicationError): number {

  if (error instanceof NotFoundError) return 404;
  if (error instanceof InputError) return 400;

  return 500;
}

 
export default unexpectedErrorMiddleware;