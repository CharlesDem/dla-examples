import { Router } from "express";
import { adminHandler } from "~/inject";

export const adminRouter = Router();


adminRouter.get('/admin/:id', adminHandler.getAdmin);
adminRouter.post('/admin', adminHandler.create);
adminRouter.get('/admins', adminHandler.findAll);


