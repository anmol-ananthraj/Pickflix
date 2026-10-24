const axios = require("axios");
const cache = require("../utils/cache");

const getOmdbDetails = async (req, res) => {
  try {
    const { imdbId } = req.params;
    const apiKey = process.env.OMDB_API_KEY;

    if (!imdbId) {
      return res.status(400).json({
        message: "IMDb ID is required",
      });
    }

    if (!apiKey) {
      return res.status(500).json({
        message: "OMDb API key is not configured",
      });
    }

    const cacheKey = `omdb:${imdbId}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData !== undefined) {
      return res.json(cachedData);
    }

    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: apiKey,
        i: imdbId,
      },
    });

    // Cache successful OMDb responses for 5 minutes
    if (response.data.Response !== "False") {
      cache.set(cacheKey, response.data, 300);
    }

    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching OMDb details:", error.message);

    return res.status(502).json({
      message: "Failed to fetch OMDb details",
    });
  }
};

module.exports = { getOmdbDetails };
