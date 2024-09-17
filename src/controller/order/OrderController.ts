import { Controller, Req, Res, Post, UseBefore, Get, Put, Patch } from "routing-controllers";
import { Request, Response } from "express";
import ORDER_SERVICE from "../../services/Order";

@Controller("/order")
export class OrderController {
    @Get("/list")
    async getOrderList(@Req() req: Request, @Res() res: Response) {
        try {
            const { status, data } = await new ORDER_SERVICE().getOrderList({STATUS: 'Pending'})
            return res
                .status(status)
                .json(data);

        } catch (err: any) {
            console.log(err);
            if ((err.name = "ZodError")) {
              let i = err.issues[err.issues.length - 1];
              return res
                .status(400)
                .json({ msg: i.message || "something went wrong" });
            } else return res.status(404).json({ msg: "something went wrong" });
        }
    }
    @Patch("/start")
    async startOrder(@Req() req: Request, @Res() res: Response) {
        try {
            // let body = UpdateMenuStatus.parse(req.body)
            const { ORDER_ID } = req.body
            const filter = {
                ORDER_ID
            }
            const { status, data } = await new ORDER_SERVICE().updateOrder(filter,{STATUS: 'In-progress'})
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
    @Patch("/complete")
    async completeOrder(@Req() req: Request, @Res() res: Response) {
        try {
            // let body = UpdateMenuStatus.parse(req.body)
            const { ORDER_ID } = req.body
            const filter = {
                ORDER_ID
            }
            const { status, data } = await new ORDER_SERVICE().updateOrder(filter,{STATUS: 'Completed'})
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
}