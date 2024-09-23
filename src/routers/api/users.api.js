import { Router } from "express";
import { getAllUsers,
    getUsers,
    createUser,
    updateUser,
    destroyUser,
} from "../../controllers/users.controller.js"

const usersApiRouter = Router()

usersApiRouter.get("/", getAllUsers);
usersApiRouter.get("/:uid", getUsers);
usersApiRouter.post("/:name/:surname/:mail/", createUser)
usersApiRouter.put("/:pid",updateUser)
usersApiRouter.delete("/:pid", destroyUser)

export default usersApiRouter