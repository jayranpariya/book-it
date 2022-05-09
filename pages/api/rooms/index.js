import dbConnect from "../../../db/dbconnect";
import nc from "next-connect";
import { getAllroom, newRoom } from "../../../controller/roomController";

// db connect
dbConnect();

const handler = nc();

handler.get(getAllroom);

handler.post(newRoom);

export default handler;
