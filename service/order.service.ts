import {Order} from "../model/order.model"

import db from "../model/database"
import config  from "../config/config"

const OrderRepository = db.typeorm.getRepository(Order)

const OrderService = {
    async createOrder(payload:any){
        try{
            let new_order = new Order()
            new_order.id_table = payload.id_table
            new_order.id_menu = payload.id_menu
            new_order.id_checkin = payload.id_checkin
            new_order.id_user = payload.id_user
            new_order.amount = payload.amount
            new_order.total_price = payload.total_price
            let order = await OrderRepository.save(new_order)
            return Order
        }catch(error){
            console.log(error)
            throw(error)
        }
    },

    async getOrder(id:number){
        try{
            let order = await OrderRepository.findOne({
                where:{
                    id_order:id,
                    is_delete:false
                }
            })
            console.log(order)
            return Order
        }catch(error){
            console.log(error)
            throw(error)
        }
    },

    async getAllOrder(filter:any){
        try{
            let all_order = await OrderRepository.findAndCount({
                where:{
                    ...filter,
                    is_delete:false
                }
            })

            return all_order
        }catch(Error){
            throw(Error)
        }
    },

    async updateOrder(id:number,payload:any){
        try {
            let Order = await OrderRepository.findOne({
                where:{
                    id_order:id,
                    is_delete:false
                }
            })
            if(!Order){
                return null
            }
            return await OrderRepository.save({
                ...Order,
                ...payload
            })
        } catch (error) {
            console.log(error)
            throw(error)
            
        }
    },

    async deleteOrder(id:number){
        try{
            let Order = await OrderRepository.findOne({
                where:{
                    id_order:id
                }
            })
            if(!Order){
                return null
            }
            Order.is_delete = true
            return await OrderRepository.save(Order)
        }catch(error){
            console.log(error)
            throw(error)
        }
    },
}

export default OrderService