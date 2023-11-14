import OrderService from "../service/order.service"
import {Order} from "../model/order.model"
import { Request,Response } from "express"

const OrderController = {
    async createOrder(req:Request,res:Response,next:any){
        const payload  = req.body
        try {
            const result = await OrderService.createOrder(payload)
            return res.status(200).send({
                status:"success",
                data:result
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async getOrder(req:Request,res:Response,next:any){
        try{
            const {id} = req.params
            const Order = await OrderService.getOrder(Number(id))
            return res.status(200).send({
                status:"success",
                data:Order
            })
        }catch(error){
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async getAllOrder(req:Request,res:Response,next:any){
        try {
            const filter = req.query
            const all_Order = await OrderService.getAllOrder(filter)
            return res.status(200).send({
                status:"success",
                data: all_Order
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async updateOrder(req:Request,res:Response,next:any){
        try {
            let {id} = req.params
            const payload = req.body
            const result = await OrderService.updateOrder(Number(id),payload)
            return res.status(200).send({
                status:"success",
                message:`Update Order id: ${id} successfully`
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async deleteOrder(req:Request,res:Response,next:any){
        try{
            const {id} = req.params
            const Order = await OrderService.getOrder(Number(id))
            if(!Order){
                return res.status(404).send({
                    message:"Order not found"
                })
            }
            const result = await OrderService.deleteOrder(Number(id))
            return res.status(200).send({
                status:"success",
                message:`Delete id ${id} successfully`
            })
        }catch(error){
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },
}

export default OrderController