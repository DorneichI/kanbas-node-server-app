import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ProjectPostModel", schema);
export default model;