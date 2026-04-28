export function HLPTestimonialLidia() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left - Photo */}
        <div className="bg-[#E0D9F0] flex items-center justify-center min-h-[300px] md:min-h-full order-2 md:order-1">
          <span className="text-[#AF75FF]/50 text-sm font-medium uppercase tracking-wider">
            Photo
          </span>
        </div>

        {/* Right - Quote */}
        <div className="bg-[#F0EDF9] p-12 md:p-16 lg:p-20 flex flex-col justify-center order-1 md:order-2">
          <span className="inline-block bg-[#AF75FF]/20 text-[#AF75FF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
            Haven teacher
          </span>
          <blockquote className="text-[#26215C] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-8">
            &ldquo;My classes are focused on topics that actually matter to newcomers. I love to see the big improvements students make after 20 weeks.&rdquo;
          </blockquote>
          <div>
            <p className="font-sans font-bold text-[#26215C] text-lg">Lidia</p>
            <p className="text-[#26215C]/60">Haven Teacher</p>
          </div>
        </div>
      </div>
    </section>
  )
}
