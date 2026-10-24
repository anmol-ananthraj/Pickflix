function HeroSkeleton() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden bg-neutral-900">
      {/* Background image placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="skeleton-shimmer absolute inset-0" />
      </div>

      {/* Dark gradient to match the hero design */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Placeholder text and buttons */}
      <div className="relative z-10 flex min-h-[600px] md:min-h-[750px] flex-col justify-end px-8 pb-16 md:px-16 md:pb-24">
        <div className="relative h-4 w-24 rounded bg-neutral-700 overflow-hidden mb-5">
          <div className="skeleton-shimmer absolute inset-0" />
        </div>

        <div className="relative h-10 md:h-16 w-3/4 max-w-2xl rounded bg-neutral-800 overflow-hidden mb-4">
          <div className="skeleton-shimmer absolute inset-0" />
        </div>

        <div className="relative h-4 w-48 rounded bg-neutral-800 overflow-hidden mb-6">
          <div className="skeleton-shimmer absolute inset-0" />
        </div>

        <div className="space-y-2 max-w-xl mb-8">
          <div className="relative h-3 w-full rounded bg-neutral-800 overflow-hidden">
            <div className="skeleton-shimmer absolute inset-0" />
          </div>
          <div className="relative h-3 w-5/6 rounded bg-neutral-800 overflow-hidden">
            <div className="skeleton-shimmer absolute inset-0" />
          </div>
          <div className="relative h-3 w-2/3 rounded bg-neutral-800 overflow-hidden">
            <div className="skeleton-shimmer absolute inset-0" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="relative h-12 w-32 rounded-lg bg-neutral-800 overflow-hidden">
            <div className="skeleton-shimmer absolute inset-0" />
          </div>
          <div className="relative h-12 w-36 rounded-lg bg-neutral-800 overflow-hidden">
            <div className="skeleton-shimmer absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSkeleton;