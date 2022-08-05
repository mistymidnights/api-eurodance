const InfoGroup = require("./infogroup.model");
const { setError } = require("../../helpers/utils");

const getAllInfo = async (req, res, next) => {
  try {
    const infos = await InfoGroup.find();
    return res.json({
      status: 200,
      message: "Recovered all elements",
      data: { infos },
    });
  } catch (error) {
    return next(setError(500, "Failed all codes"));
  }
};

const getByIdOfInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const info = await InfoGroup.findById(id);
    if (!info) return next(setError(404, "Element not found"));
    return res.json({
      status: 200,
      message: "Recovered all elements",
      data: { info },
    });
  } catch (error) {
    return next(setError(500, "Failed element"));
  }
};

const createInfo = async (req, res, next) => {
  try {
    const info = new InfoGroup(req.body);
    const infoInBd = await info.save();
    return res.json({
      status: 201,
      message: "Created new element",
      data: { element: infoInBd },
    });
  } catch (error) {
    return next(setError(500, "Failed created element"));
  }
};

const updateInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const info = new InfoGroup(req.body);
    info._id = id;
    const updatedInfo = await InfoGroup.findByIdAndUpdate(id, info);
    if (!updatedInfo) return next(setError(404, "Code not found"));
    return res.json({
      status: 201,
      message: "Updated element",
      data: { element: updatedInfo },
    });
  } catch (error) {
    return next(setError(500, "Failed updated element"));
  }
};

const deleteInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInfo = await InfoGroup.findByIdAndDelete(id);
    if (!deletedInfo) return next(setError(404, "Element not found"));
    return res.json({
      status: 200,
      message: "deleted element",
      data: { element: deletedInfo },
    });
  } catch (error) {
    return next(setError(500, "Failed deleted element"));
  }
};

module.exports = {
  getAllInfo,
  getByIdOfInfo,
  createInfo,
  updateInfo,
  deleteInfo,
};
