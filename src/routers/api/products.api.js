import { Router } from "express";
import {
  getAllProducts,
  getProducts,
  createProduct,
  updateProduct,
  destroyProduct,
} from "../../controllers/products.controller.js";
import isValidData from "../../middlewares/isValidData.mid.js";

const productsApiRouter = Router()

productsApiRouter.get("/", getAllProducts);
productsApiRouter.get("/:pid", getProducts);
productsApiRouter.post("/", isValidData, createProduct);
productsApiRouter.put("/:pid", updateProduct)
productsApiRouter.delete("/:pid", destroyProduct)

export default productsApiRouter