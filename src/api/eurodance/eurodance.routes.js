const EuroDanceRoutes = require("express").Router();
const {
  getAll,
  getById,
  create,
  update,
  deleteSong,
} = require("./eurodance.controller");

EuroDanceRoutes.get("/getAll", getAll);
EuroDanceRoutes.get("/:id", getById);
EuroDanceRoutes.post("/create", create);
EuroDanceRoutes.patch("/update/:id", update);
EuroDanceRoutes.delete("/delete/:id", deleteSong);

module.exports = EuroDanceRoutes;
