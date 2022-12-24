import { Request, Response } from "express";
import { logger } from "~/winston.logger";
import { IService } from "../core/service.interface";
import { AdminDTO } from "./admin.dto";

export class AdminHandler {

    private adminService: IService<AdminDTO>;

    constructor(adminService: IService<AdminDTO>) {
        this.adminService = adminService;
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    create = async (req: Request,res: Response) =>  {
        console.log(this.adminService)

        const adminDto: AdminDTO = req.body;
        try {
            const result = await this.adminService.create(adminDto);

            if (result == null) return res.status(404).send;

            res.status(200).json(result);
        } catch (err) {
            logger.error(err)
            throw err;
        }

    }

    findAll = async (req: Request, res: Response) => {
        await this.adminService.findAll({filter: "aze"} as Filter)
    }

  


    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async getAdmin(req: Request, res: Response) {
        return null;
    }

}





export interface Filter {
        filter:string
}


