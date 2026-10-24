const API_BASE_URL = "http://localhost:5000/api";

export async function getTrendingMovies() {
  try {
    const res = await fetch(`${API_BASE_URL}/movies/trending`);

    if (!res.ok) throw new Error("Failed to fetch trending movies");

    return await res.json();
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    return [];
  }
}

export async function getNowPlayingMovies() {
  try {
    const res = await fetch(`${API_BASE_URL}/tmdb/movies/now-playing`);

    if (!res.ok) throw new Error("Failed to fetch now-playing movies");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching now-playing movies:", err);
    return [];
  }
}

export async function getNewReleaseMovies() {
  try {
    const res = await fetch(`${API_BASE_URL}/tmdb/movies/new-releases`);

    if (!res.ok) throw new Error("Failed to fetch new releases");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching new releases:", err);
    return [];
  }
}

export async function getTrendingTvShows() {
  try {
    const res = await fetch(`${API_BASE_URL}/tmdb/tv/trending`);

    if (!res.ok) throw new Error("Failed to fetch trending TV shows");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching trending TV shows:", err);
    return [];
  }
}

export async function getMoviesByGenre(genreId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/movies/genre/${genreId}`
    );

    if (!res.ok) throw new Error("Failed to fetch movies by genre");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching movies by genre:", err);
    return [];
  }
}

export async function getTvShowsByGenre(genreId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/tv/genre/${genreId}`
    );

    if (!res.ok) throw new Error("Failed to fetch TV shows by genre");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching TV shows by genre:", err);
    return [];
  }
}

export async function getMovieTrailer(movieId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/movies/${movieId}/trailer`
    );

    if (!res.ok) throw new Error("Failed to fetch movie trailer");

    const data = await res.json();
    const trailer = data.results?.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );

    return trailer
      ? `https://www.youtube.com/embed/${trailer.key}`
      : null;
  } catch (err) {
    console.error("Error fetching movie trailer:", err);
    return null;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/movies/${movieId}/details`
    );

    if (!res.ok) throw new Error("Failed to fetch movie details");

    return await res.json();
  } catch (err) {
    console.error("Error fetching movie details:", err);
    return null;
  }
}

export async function getTvDetails(tvId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/tv/${tvId}/details`
    );

    if (!res.ok) throw new Error("Failed to fetch TV details");

    return await res.json();
  } catch (err) {
    console.error("Error fetching TV details:", err);
    return null;
  }
}

export async function getOmdbDetails(imdbId) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/omdb/${encodeURIComponent(imdbId)}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch OMDb details");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching OMDb details:", error);
    return null;
  }
}

export async function getMovieCredits(movieId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/movies/${movieId}/credits`
    );

    if (!res.ok) throw new Error("Failed to fetch movie credits");

    return await res.json();
  } catch (err) {
    console.error("Error fetching movie credits:", err);
    return null;
  }
}

export async function getTvCredits(tvId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/tv/${tvId}/credits`
    );

    if (!res.ok) throw new Error("Failed to fetch TV credits");

    return await res.json();
  } catch (err) {
    console.error("Error fetching TV credits:", err);
    return null;
  }
}

export async function getTvExternalIds(tvId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/tv/${tvId}/external-ids`
    );

    if (!res.ok) throw new Error("Failed to fetch TV external IDs");

    return await res.json();
  } catch (err) {
    console.error("Error fetching TV external IDs:", err);
    return null;
  }
}

export async function getMovieVideos(movieId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/movies/${movieId}/videos`
    );

    if (!res.ok) throw new Error("Failed to fetch movie videos");

    return await res.json();
  } catch (err) {
    console.error("Error fetching movie videos:", err);
    return null;
  }
}

export async function getMovieReviews(movieId) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/movies/${movieId}/reviews`
    );

    if (!res.ok) throw new Error("Failed to fetch movie reviews");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching movie reviews:", err);
    return [];
  }
}

export async function searchMovies(query) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/tmdb/search/movies?query=${encodeURIComponent(query)}`
    );

    if (!res.ok) throw new Error("Failed to search movies");

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error searching movies:", err);
    return [];
  }
}

