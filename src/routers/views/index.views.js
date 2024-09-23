import { Router } from "express";
import usersViewRouter from './users.views.js';
import productsViewRouter from './products.views.js';

const viewRouter = Router()

viewRouter.use("/products", productsViewRouter);
viewRouter.use("/users", usersViewRouter);
viewRouter.get("/", (req, res, next)=> {
    try {
      return res.render("index")
    } catch (error) {
      return next(error)
    }
  })
  
  export default viewRouter