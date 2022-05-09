// const  dbConnect  = require("../db/dbconnect");
const Room = require("../models/room");
const rooms = require("../data/room.json");
const mongoose = require("mongoose");
// dbConnect();
mongoose.connect(
  "mongodb+srv://JayRanpariya:jay04052002@node.tnxl6.mongodb.net/bookit?retryWrites=true&w=majority"
);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Room are deleted");

    await Room.insertMany(rooms);
    console.log("all room are added");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
