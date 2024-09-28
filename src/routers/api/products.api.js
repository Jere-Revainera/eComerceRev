import { Router } from "express";
import {
  getAllProducts,
  getProducts,
  createProduct,
  updateProduct,
  destroyProduct,
} from "../../controllers/products.controller.js";
import isValidDataProd from "../../middlewares/isValidDataProd.mid.js";
import isValidDataProd from './../../middlewares/isValidDataProd.mid';

const productsApiRouter = Router()

productsApiRouter.get("/", getAllProducts);
productsApiRouter.get("/:pid", getProducts);
productsApiRouter.post("/", isValidDataProd, createProduct);
productsApiRouter.put("/:pid", updateProduct)
productsApiRouter.delete("/:pid", destroyProduct)

export default productsApiRouter