const Eurodance = require("./eurodance.model");
const { setError } = require("../../helpers/utils");

const getAll = async (req, res, next) => {
  try {
    const songs = await Eurodance.find();
    return res.json({
      status: 200,
      message: "Recovered all groups",
      data: { elements: songs },
    });
  } catch (error) {
    return next(setError(500, "Failed all codes"));
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Eurodance.findById(id);
    if (!song) return next(setError(404, "Group not found"));
    return res.json({
      status: 200,
      message: "Recovered all group",
      data: { element: song },
    });
  } catch (error) {
    return next(setError(500, "Failed groups"));
  }
};

const create = async (req, res, next) => {
  try {
    const song = new Eurodance(req.body);
    const songInBd = await song.save();
    return res.json({
      status: 201,
      message: "Created new element",
      data: { element: songInBd },
    });
  } catch (error) {
    return next(setError(500, "Failed created group"));
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = new Eurodance(req.body);
    song._id = id;
    const updatedSong = await Eurodance.findByIdAndUpdate(id, song);
    if (!updatedSong) return next(setError(404, "Code not found"));
    return res.json({
      status: 201,
      message: "Updated element",
      data: { element: updatedElement },
    });
  } catch (error) {
    return next(setError(500, "Failed updated group"));
  }
};

const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSong = await Eurodance.findByIdAndDelete(id);
    if (!deletedSong) return next(setError(404, "Group not found"));
    return res.json({
      status: 200,
      message: "deleted group",
      data: { element: deletedSong },
    });
  } catch (error) {
    return next(setError(500, "Failed deleted group"));
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteSong,
};
