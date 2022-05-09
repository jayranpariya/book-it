import dbConnect from "../../../db/dbconnect";
import nc from "next-connect";
import {
  getOneRoom,
  updateRoom,
  deleteRoom,
} from "../../../controller/roomController";

dbConnect();

const handler = nc();

handler.get(getOneRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
