import dbConnect from "../../../db/dbconnect";
import nc from "next-connect";
import {
  getOneRoom,
  updateRoom,
  deleteRoom,
} from "../../../controller/roomController";

import onError from "../../../middleware/errors";

dbConnect();

const handler = nc({ onError });

handler.get(getOneRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
