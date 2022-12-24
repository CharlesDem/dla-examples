import { Router } from "express";
import { adminRouter } from "./router";

export const apiRouter = Router()

apiRouter.use('/api/v1', adminRouter)