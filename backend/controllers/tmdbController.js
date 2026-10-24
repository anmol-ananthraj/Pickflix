const axios = require("axios");
const cache = require("../utils/cache");

const TMDB_BASE_URL = "https://api.themoviedb.org/3";


const tmdbRequest = async (req, res, path, params = {}) => {
  try {
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "TMDB API key is not configured",
      });
    }

    // Create a unique cache key for this endpoint and its parameters
    const cacheKey = `tmdb:${path}:${JSON.stringify(params)}`;

    // Return cached data if available
    const cachedData = cache.get(cacheKey);

    if (cachedData !== undefined) {
      return res.json(cachedData);
    }

    // Otherwise, fetch fresh data from TMDB
    const response = await axios.get(`${TMDB_BASE_URL}${path}`, {
      params: {
        ...params,
        api_key: apiKey,
      },
    });

    // Save the response for 5 minutes
    cache.set(cacheKey, response.data, 300);

    return res.json(response.data);
  } catch (error) {
    console.error(
      "TMDB request failed:",
      error.response?.status || error.message
    );

    return res.status(502).json({
      message: "Failed to fetch data from TMDB",
    });
  }
};

const getNowPlayingMovies = (req, res) =>
  tmdbRequest(req, res, "/movie/now_playing");

const getNewReleaseMovies = (req, res) => {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const formatDate = (date) => date.toISOString().slice(0, 10);

  return tmdbRequest(req, res, "/discover/movie", {
    sort_by: "primary_release_date.desc",
    "primary_release_date.gte": formatDate(oneYearAgo),
    "primary_release_date.lte": formatDate(today),
    with_release_type: "2|3",
    region: "US",
    "vote_count.gte": 20,
  });
};

const getTrendingTvShows = (req, res) =>
  tmdbRequest(req, res, "/trending/tv/week");

const getMoviesByGenre = (req, res) =>
  tmdbRequest(req, res, "/discover/movie", {
    with_genres: req.params.genreId,
  });

const getTvShowsByGenre = (req, res) =>
  tmdbRequest(req, res, "/discover/tv", {
    with_genres: req.params.genreId,
  });

const getMovieTrailer = (req, res) =>
  tmdbRequest(req, res, `/movie/${req.params.movieId}/videos`);

const getMovieDetails = (req, res) =>
  tmdbRequest(req, res, `/movie/${req.params.movieId}`);

const getTvDetails = (req, res) =>
  tmdbRequest(req, res, `/tv/${req.params.tvId}`);

const getMovieCredits = (req, res) =>
  tmdbRequest(req, res, `/movie/${req.params.movieId}/credits`);

const getTvCredits = (req, res) =>
  tmdbRequest(req, res, `/tv/${req.params.tvId}/credits`);

const getTvExternalIds = (req, res) =>
  tmdbRequest(req, res, `/tv/${req.params.tvId}/external_ids`);

const getMovieVideos = (req, res) =>
  tmdbRequest(req, res, `/movie/${req.params.movieId}/videos`);

const getMovieReviews = (req, res) =>
  tmdbRequest(req, res, `/movie/${req.params.movieId}/reviews`);

const searchMovies = (req, res) => {
  const query = String(req.query.query || "").trim();

  if (!query) {
    return res.status(400).json({
      message: "Search query is required",
    });
  }

  return tmdbRequest(req, res, "/search/movie", { query });
};

module.exports = {
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
};
