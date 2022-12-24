import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { adminHandler } from "../../inject";
import { adminValidators } from "./admin.validator";

export const adminRouter = Router();

adminRouter.get('/', adminValidators('findAll'), validate, adminHandler.findAll);
adminRouter.get('/:id', adminValidators('findOrDelete'), validate,  adminHandler.find);
adminRouter.post('/', adminValidators('create'), validate, adminHandler.create);
adminRouter.delete('/:id', adminValidators('findOrDelete'), validate, adminHandler.delete);
adminRouter.patch('/', adminValidators('update'), validate, adminHandler.update);



