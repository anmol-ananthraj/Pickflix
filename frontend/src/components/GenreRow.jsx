import MovieCard from "./MovieCard"
import { useRef } from "react"
import leftIcon from "../assets/scrollLeft.png"
import rightIcon from "../assets/scrollRight.png"

function GenreRow({ title, movies }) {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    })
  }

  return (
    <section>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-headline text-2xl font-black tracking-tight text-on-surface">{title}</h2>
          <div className="mt-2 h-1 w-12 bg-primary"></div>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          aria-label={`Scroll ${title} left`}
          className="absolute -left-3 top-[40%] z-10 flex h-16 w-12 -translate-y-1/2 items-center justify-center bg-transparent opacity-75 transition-all duration-300 hover:scale-125 hover:opacity-100 active:scale-95 md:-left-6 md:h-20 md:w-16"
        >
          <img
            src={leftIcon}
            alt="left"
            className="h-10 md:h-14 w-auto object-contain invert brightness-200 drop-shadow-lg"
          />
        </button>

        <button
          onClick={scrollRight}
          aria-label={`Scroll ${title} right`}
          className="absolute -right-3 top-[40%] z-10 flex h-16 w-12 -translate-y-1/2 items-center justify-center bg-transparent opacity-75 transition-all duration-300 hover:scale-125 hover:opacity-100 active:scale-95 md:-right-6 md:h-20 md:w-16"
        >
          <img
            src={rightIcon}
            alt="right"
            className="h-10 md:h-14 w-auto object-contain invert brightness-200 drop-shadow-lg"
          />
        </button>

        <div className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 pb-8 scroll-smooth" ref={scrollRef}>
          {(movies || []).map((movie, index) => (
            <MovieCard key={movie.tmdbId ?? movie.id ?? index} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GenreRow
