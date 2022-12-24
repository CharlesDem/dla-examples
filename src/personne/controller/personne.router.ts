import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { personHandler } from "../../inject";
import { personneValidators } from "./personne.validator";

export const personneRouter = Router();

personneRouter.get('/', personneValidators('findAll'), validate, personHandler.findAll);
personneRouter.get('/:id', personneValidators('findOrDelete'), validate, personHandler.find);
personneRouter.delete('/:id', personneValidators('findOrDelete'), validate, personHandler.delete);
personneRouter.patch('/',personneValidators('update'), validate,  personHandler.update);