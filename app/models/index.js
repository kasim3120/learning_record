import url from "../config/db.config.js";
import mongoose from "mongoose";
import study from "../models/study.model.js"

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.study = study(mongoose);

export default db;