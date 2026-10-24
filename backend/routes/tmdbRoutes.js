
const express = require("express");
const router = express.Router();

const {
  getNowPlayingMovies,
  getNewReleaseMovies,
  getTrendingTvShows,
  getMoviesByGenre,
  getTvShowsByGenre,
  getMovieTrailer,
  getMovieDetails,
  getTvDetails,
  getMovieCredits,
  getTvCredits,
  getTvExternalIds,
  getMovieVideos,
  getMovieReviews,
  searchMovies,
} = require("../controllers/tmdbController");

router.get("/movies/now-playing", getNowPlayingMovies);
router.get("/movies/new-releases", getNewReleaseMovies);
router.get("/tv/trending", getTrendingTvShows);
router.get("/movies/genre/:genreId", getMoviesByGenre);
router.get("/tv/genre/:genreId", getTvShowsByGenre);
router.get("/movies/:movieId/trailer", getMovieTrailer);
router.get("/movies/:movieId/details", getMovieDetails);
router.get("/tv/:tvId/details", getTvDetails);
router.get("/movies/:movieId/credits", getMovieCredits);
router.get("/tv/:tvId/credits", getTvCredits);
router.get("/tv/:tvId/external-ids", getTvExternalIds);
router.get("/movies/:movieId/videos", getMovieVideos);
router.get("/movies/:movieId/reviews", getMovieReviews);
router.get("/search/movies", searchMovies);

module.exports = router;
