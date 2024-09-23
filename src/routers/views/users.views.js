import { Router } from "express";
import { showOneUser, showUsers } from "../../controllers/users.controller.js";

const usersViewRouter = Router();

usersViewRouter.get("/", showUsers);
usersViewRouter.get("/:pid", showOneUser);

export default usersViewRouter;
