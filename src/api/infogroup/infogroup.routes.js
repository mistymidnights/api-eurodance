const infoRoutes = require("express").Router();
const {
  getAllInfo,
  getByIdOfInfo,
  createInfo,
  updateInfo,
  deleteInfo,
} = require("./infogroup.controller");

infoRoutes.get("/getAll", getAllInfo);
infoRoutes.get("/:id", getByIdOfInfo);
infoRoutes.post("/create", createInfo);
infoRoutes.patch("/update/:id", updateInfo);
infoRoutes.delete("/delete/:id", deleteInfo);

module.exports = infoRoutes;
