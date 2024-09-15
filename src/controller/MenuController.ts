import { Controller, Req, Res, Post, UseBefore, Get, Put, Patch } from "routing-controllers";
import { Request, Response } from "express";
import MENU_SERVICE from "../services/Menu";
import { CreateMenu } from "./Menu.validation"

@Controller("/menu")
export class MenuController {
    @Post("/")
    async createMenu(@Req() req: Request, @Res() res: Response) {
        try {
            let body = CreateMenu.parse(req.body)
            let { status, data } = await new MENU_SERVICE().createMenu(body)
            return res
                .status(status)
                .json(data);

        } catch (err: any) {
            console.log(err);
            if (err.name = 'ZodError') {
                let i = err.issues[err.issues.length - 1]
                return res
                    .status(400)
                    .json({ msg: err.message || 'something went wrong' });
            } else
                return res
                    .status(404)
                    .json({ msg: err.message || 'something went wrong' });
        }
    }
    @Get("/list")
    async getMenuList(@Req() req: Request, @Res() res: Response) {
        try {
            const { status, data } = await new MENU_SERVICE().getMenuList(req?.body)
            return res
                .status(status)
                .json(data);

        } catch (err: any) {
            console.log(err);
            if (err.name = 'ZodError') {
                let i = err.issues[err.issues.length-1]
                return res
                    .status(400)
                    .json({ msg: i.message || 'something went wrong' });
            } else
                return res
                    .status(404)
                    .json({ msg: 'something went wrong' });
        }
    }
    @Get("/details")
    async getMenuById(@Req() req: Request, @Res() res: Response) {
        try {
            const { status, data } = await new MENU_SERVICE().getMenuById(req?.query)
            return res
                .status(status)
                .json(data);

        } catch (err: any) {
            console.log(err);
            if (err.name = 'ZodError') {
                let i = err.issues[err.issues.length-1]
                return res
                    .status(400)
                    .json({ msg: i.message || 'something went wrong' });
            } else
                return res
                    .status(404)
                    .json({ msg: 'something went wrong' });
        }
    }
    @Put("/")
    async updateMenu(@Req() req: Request, @Res() res: Response) {
        try {
            const { MENU_ID } = req?.body
            const filter = {
                MENU_ID
            }
            const { status, data } = await new MENU_SERVICE().updateMenu(filter,req?.body)
            return res
                .status(status)
                .json(data);

        } catch (err: any) {
            console.log(err);
            if (err.name = 'ZodError') {
                let i = err.issues[err.issues.length-1]
                return res
                    .status(400)
                    .json({ msg: i.message || 'something went wrong' });
            } else
                return res
                    .status(404)
                    .json({ msg: 'something went wrong' });
        }
    }
    // @Patch("/status")
    // async updateMenuStatus(@Req() req: Request, @Res() res: Response) {
    //     try {
    //         console.log(req)
    //         await new SignUp().init(req.body)
    //         return res.json({aaa:"aa"})

    //     } catch (err: any) {
    //         console.log(err);
    //         if (err.name = 'ZodError') {
    //             let i = err.issues[err.issues.length-1]
    //             return res
    //                 .status(400)
    //                 .json({ msg: i.message || 'something went wrong' });
    //         } else
    //             return res
    //                 .status(404)
    //                 .json({ msg: 'something went wrong' });
    //     }
    // }
}