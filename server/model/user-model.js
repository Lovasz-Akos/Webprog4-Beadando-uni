import mongoose from "mongoose";
import { StringUtil } from "../utilities/string-util";
import bcrypt from "bcrypt-nodejs";

const userSchema = new mongoose.Schema({
    username: String,
    first: String,
    last: String,
    password: String,
});