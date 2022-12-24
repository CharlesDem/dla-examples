import { Router } from "express"
import { adminRouter } from "../admin/controller/admin.router"
import { personneRouter } from "../personne/controller/personne.router"

export const router = Router()

router.use('/admin', adminRouter)
router.use('/personne', personneRouter)