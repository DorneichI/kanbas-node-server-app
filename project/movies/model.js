import mongoose from "mongoose";
import movieSchema from "./schema.js";
const movieModel = mongoose.model("ProjectMovieModel", movieSchema);
export default movieModel;