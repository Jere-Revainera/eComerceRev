import { Router } from "express";
import { getAllUsers,
    getUsers,
    createUser,
    updateUser,
    destroyUser,
} from "../../controllers/users.controller.js"
import isValidDataUser from "../../middlewares/isValidDataUser.mid.js";


const usersApiRouter = Router()

usersApiRouter.get("/", getAllUsers);
usersApiRouter.get("/:uid", getUsers);
usersApiRouter.post("/",isValidDataUser, createUser)
usersApiRouter.put("/:uid",updateUser)
usersApiRouter.delete("/:uid", destroyUser)

export default usersApiRouter