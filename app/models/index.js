import url from "../config/db.config.js";
import mongoose from "mongoose";
import Study from "../models/study.model.js"

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.study = Study(mongoose);

export default db;