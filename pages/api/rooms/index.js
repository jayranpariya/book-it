import dbConnect from "../../../db/dbconnect";
import nc from "next-connect";
import { getAllroom } from "../../../controller/roomController";

// db connect
dbConnect();

const handler = nc();

handler.get(getAllroom);

export default handler;
