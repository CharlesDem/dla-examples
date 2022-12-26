import { NextFunction, Request, Response } from "express";
import { logger } from "~/winston.logger";
import { AdminPersonDTO } from "./admin.dto";
import { IAdminService } from "./admin.service";

export class AdminHandler {

    private adminService: IAdminService;

    constructor(adminService: IAdminService) {
        this.adminService = adminService;
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    create = async (req: Request, res: Response, next: NextFunction) => {
        console.log(this.adminService)

        const adminDto: AdminPersonDTO = req.body;
        try {
            const result = await this.adminService.create(adminDto);

            if (result == null) return res.status(404).send;

            res.status(200).json(result);
        } catch (err) {
            logger.error(err);
            next(err);
        }

    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.adminService.findAll(filters)
            res.status(200).json(result)

        } catch (err) {
            next(err);
        }
    }




    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    getAdmin = async (req: Request, res: Response, next: NextFunction) => {

        const id = req.params.id as unknown as number;
        try {

            const result = await this.adminService.findById(id);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

}




