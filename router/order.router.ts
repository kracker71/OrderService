import { Router } from "express";
import OrderController from "../controller/order.controller";

const router = Router()

router.post("/create",OrderController.createOrder)

router.get("/all",OrderController.getAllOrder)

router.get("/bycheckin/:id_checkin",OrderController.getOrderByCheckInId)

router.get("/:id",OrderController.getOrder)

router.put("/update/:id",OrderController.updateOrder)

router.put("/delete/:id",OrderController.deleteOrder)

export default router