function SkeletonRow({ title }) {
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold text-white mb-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex-none w-[280px]"
          >
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-neutral-800">
              <div className="skeleton-shimmer absolute inset-0" />
            </div>

            <div className="relative mt-3 h-4 w-3/4 rounded bg-neutral-800 overflow-hidden">
              <div className="skeleton-shimmer absolute inset-0" />
            </div>

            <div className="relative mt-2 h-3 w-1/3 rounded bg-neutral-800 overflow-hidden">
              <div className="skeleton-shimmer absolute inset-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkeletonRow;