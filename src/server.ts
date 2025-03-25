import express from "express";
import { connectDB } from "./config/connectDB";

const server = express();

connectDB();

server.use(express.json());

export default server;
