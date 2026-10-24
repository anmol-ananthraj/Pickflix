import { useEffect, useState } from "react"
import GenreRow from "../components/GenreRow"
import MovieHeroCarousel from "../components/MovieHeroCarousel"
import { getMoviesByGenre, getNewReleaseMovies, getTrendingMovies } from "../api/tmdb"
import SkeletonRow from "../components/SkeletonRow"
import HeroSkeleton from "../components/HeroSkeleton"

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
}

function formatMovie(movie) {
  const genreIds = movie.genre_ids ?? movie.genreIds

  return {
    id: movie.tmdbId ?? movie.id,
    title: movie.title,
    rating: movie.rating ?? movie.vote_average,
    poster:
      movie.poster ??
      (movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""),
    backdrop:
      movie.backdrop ??
      (movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : ""),
    year: movie.releaseYear ?? movie.release_date?.slice(0, 4),
    genre: movie.genres?.[0] ?? genreMap[genreIds?.[0]] ?? "Movie",
    overview: movie.description ?? movie.overview,
    mediaType: "movie",
  }
}

function Movies() {
  const [heroMovies, setHeroMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [rows, setRows] = useState({
    newReleases: [],
    horror: [],
    action: [],
    thriller: [],
    comedy: [],
    romance: [],
  })

  useEffect(() => {
    async function loadMoviePage() {
      try {
        const [trending, newReleases, horror, action, thriller, comedy, romance] = await Promise.all([
          getTrendingMovies().catch(() => []),
          getNewReleaseMovies().catch(() => []),
          getMoviesByGenre(27).catch(() => []),
          getMoviesByGenre(28).catch(() => []),
          getMoviesByGenre(53).catch(() => []),
          getMoviesByGenre(35).catch(() => []),
          getMoviesByGenre(10749).catch(() => []),
        ])

        const hasPoster = (movie) => Boolean(movie.poster_path || movie.poster)

        const trendingMovies = (trending || []).filter(hasPoster).map(formatMovie)

        setHeroMovies(trendingMovies.slice(0, 4))
        setRows({
          newReleases: (newReleases || []).filter(hasPoster).map(formatMovie),
          horror: (horror || []).filter(hasPoster).map(formatMovie),
          action: (action || []).filter(hasPoster).map(formatMovie),
          thriller: (thriller || []).filter(hasPoster).map(formatMovie),
          comedy: (comedy || []).filter(hasPoster).map(formatMovie),
          romance: (romance || []).filter(hasPoster).map(formatMovie),
        })
      } catch (error) {
        console.error("Failed to load movie page:", error)
      } finally {
        setLoading(false)
      }
    }

    loadMoviePage()
  }, [])

  return (
  <div className="space-y-16 overflow-x-hidden px-0 py-0 pb-20">
    {loading ? (
      <HeroSkeleton />
    ) : (
      <MovieHeroCarousel movies={heroMovies} />
    )}

    <div className="space-y-1 px-8 py-0 md:px-16">
      <div className="space-y-1">
        {loading ? (
          <>
            <SkeletonRow title="New Releases" />
            <SkeletonRow title="Horror" />
            <SkeletonRow title="Action" />
            <SkeletonRow title="Thriller" />
            <SkeletonRow title="Comedy" />
            <SkeletonRow title="Romance" />
          </>
        ) : (
          <>
            <GenreRow title="New Releases" movies={rows.newReleases} />
            <GenreRow title="Horror" movies={rows.horror} />
            <GenreRow title="Action" movies={rows.action} />
            <GenreRow title="Thriller" movies={rows.thriller} />
            <GenreRow title="Comedy" movies={rows.comedy} />
            <GenreRow title="Romance" movies={rows.romance} />
          </>
        )}
      </div>
    </div>
  </div>
)
}

export default Movies
