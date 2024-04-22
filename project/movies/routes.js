import * as dao from "./dao.js";

function ProjectMovieRoutes(app) {
  app.get("/projectapi/movies", async (req, res) => {
    const movies = await dao.findAllMovies();
    res.send(movies);
  });
  app.get("/projectapi/movies/:movieId", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await dao.findMovieByMovieId(movieId);
    res.send(movie);
  });
}

export default ProjectMovieRoutes;