import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middleware/catchAsyncError";
import APIFeatures from "../utils/apiFeatures";
import room from "../models/room";

const getAllroom = catchAsyncError(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();
  let rooms = await apiFeatures.query;
  
  
  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;
  
  
  //  await apiFeatures.query;
  // const rooms = await Room.find();
  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

//create new room => /api/rooms
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

const getOneRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById({ _id: req.query.id });
  if (!room) {
    // return res.status(400).json({
    //   success: false,
    //   error: "room not found with this id",
    // });
    return next(new ErrorHandler("room not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

//update
const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById({ _id: req.query.id });
  if (!room) {
    return next(new ErrorHandler("room not found with this id", 404));
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
});

//delete
const deleteRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById({ _id: req.query.id });
  if (!room) {
    return next(new ErrorHandler("room not found with this id", 404));
  }
  await room.remove();
  res.status(200).json({
    success: true,
    message: "roome is delete",
  });
});

export { getAllroom, newRoom, getOneRoom, updateRoom, deleteRoom };
