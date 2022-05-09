import Room from "../models/room";

const getAllroom = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//create new room => /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getOneRoom = async (req, res) => {
  try {
    const room = await Room.findById({ _id: req.query.id });
    if (!room) {
      return res.status(400).json({
        success: false,
        error: "room not found with this id",
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//update
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById({ _id: req.query.id });
    if (!room) {
      return res.status(400).json({
        success: false,
        error: "room not found with this id",
      });
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//delete
const deleteRoom = async (req, res) => {
  try {
    let room = await Room.findById({ _id: req.query.id });
    if (!room) {
      return res.status(400).json({
        success: false,
        error: "room not found with this id",
      });
    }
    await room.remove();
    res.status(200).json({
      success: true,
      message: "roome is delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllroom, newRoom, getOneRoom, updateRoom, deleteRoom };
