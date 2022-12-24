import { NextFunction, Request, Response } from "express";
import { AdminDTO, AdminFilterDto, AdminPersonDTO } from "../dto/admin.dto";
import { IAdminService } from "../admin.service";

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

        const adminDto: AdminPersonDTO = req.body;

        try {
            const result = await this.adminService.create(adminDto);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }

    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {

        const filters = req.query as unknown as AdminFilterDto;

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
    find = async (req: Request, res: Response, next: NextFunction) => {

        const id = req.params.id as unknown as number;
        try {
            const result = await this.adminService.findById(id);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    delete = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id as unknown as number;

        try {
            await this.adminService.delete(id);
            res.status(200).send();

        } catch (err) {
            next(err)
        }
    }

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    update = async(req: Request, res: Response, next: NextFunction) => {
        const adminDto: AdminDTO = req.body;

        try {
            const result = await this.adminService.update(adminDto);
            res.status(200).json(result);

        } catch(err) {
            next(err);
        }
    }
}
