import dbConnect from "../../../db/dbconnect";
import nc from "next-connect";
import { getAllroom, newRoom } from "../../../controller/roomController";
import onError from "../../../middleware/errors";

// db connect
dbConnect();

const handler = nc({ onError });

handler.get(getAllroom);

handler.post(newRoom);

export default handler;
