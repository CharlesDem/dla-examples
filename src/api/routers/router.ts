import { Router } from "express";
import { adminHandler } from "~/inject";

export const adminRouter = Router();


adminRouter.get('/admin', adminHandler.getAdmin);
adminRouter.post('/admin', adminHandler.create);
adminRouter.post('/admins', adminHandler.findAll);


