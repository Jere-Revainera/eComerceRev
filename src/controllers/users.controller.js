import usersManager from "./../data/user.manager.js";

async function getAllUsers(req, res, next) {
  try {
    let { name } = req.query;
    let response;
    if (!name) {
      response = await usersManager.readAll();
    } else {
      response = await usersManager.readAll(name);
    }
    if (response.length > 0) {
      return res.status(200).json({ message: "User read", response });
    } else {
      const error = new Error("Not found user");
      error.statusCode = 404;
      throw reportError;
    }
  } catch (error) {
    return next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const { uid } = req.params;
    const response = await usersManager.read(uid);
    if (response) {
      return res.statusCode(200).json({ message: "User read", response });
    } else {
      const error = new Error("Not found product");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const { name, surname, mail, password } = req.body;

    const response = await usersManager.create({
      name,
      surname,
      mail,
      password,
    });
    return res.status(201).json({ message: "User created", response });
  } catch (error) {
    return next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { pid } = req.params;
    const newData = req.body;
    const responseManager = await UsersManager.update(pid, newData);
    if (!responseManager) {
      const error = new Error(`User with id ${pid} not found`);
      error.statusCode = 404;
      throw error;
    }
    return res
      .status(200)
      .json({ message: "User update", response: responseManager });
  } catch (error) {
    return next(error);
  }
}

async function destroyUser(req, res, next) {
  try {
    const { pid } = req.params;
    const responseManager = await UsersManager.delate(pid);
    if (!responseManager) {
      const error = new Error(`User with id ${pid} not found`);
      error.statusCode = 404;
      throw error;
    }
    return res
      .status(200)
      .json({ message: "User dalete", response: responseManager });
  } catch (error) {
    return next(error);
  }
}

async function showUsers(req, res, next) {
  try {
    let { mail } = req.query;
    let all;
    if (!mail) {
      all = await UsersManager.readAll();
    } else {
      all = await UsersManager.readAll(mail);
    }
    if (all.length > 0) {
      return res.render("users", { users: all });
    } else {
      const error = new Error("not found users");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function showOneUser(req, res, next) {
  try {
    const { pid } = req.params;
    const response = await usersManager.read(pid);
    if (response) {
      return res.render("oneuser", { one: response });
    } else {
      const error = new Error("Not fouund user");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

export {
  createUser,
  getUsers,
  getAllUsers,
  destroyUser,
  updateUser,
  showOneUser,
  showUsers,
};
