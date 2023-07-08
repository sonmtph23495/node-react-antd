import express from "express";
import { create, get, getAll, remove, update } from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();
router.get("/products", getAll);
router.get("/products/:id", get);
router.put("/products/:id", checkPermission, update);
router.delete("/products/:id", checkPermission, remove);
router.post("/products", checkPermission, create);

export default router;
