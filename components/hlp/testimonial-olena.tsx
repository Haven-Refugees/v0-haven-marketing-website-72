export function HLPTestimonialOlena() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left - Quote */}
        <div className="bg-[#F0EDF9] p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <span className="inline-block bg-[#AF75FF]/20 text-[#AF75FF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
            Haven student
          </span>
          <blockquote className="text-[#26215C] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-8">
            &ldquo;This program has truly made a difference for me. It gave me a clear and consistent system for studying English. Most importantly, I overcame my fear of speaking.&rdquo;
          </blockquote>
          <div>
            <p className="font-sans font-bold text-[#26215C] text-lg">Olena</p>
            <p className="text-[#26215C]/60">Ukraine</p>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="bg-[#E0D9F0] flex items-center justify-center min-h-[300px] md:min-h-full">
          <span className="text-[#AF75FF]/50 text-sm font-medium uppercase tracking-wider">
            Photo
          </span>
        </div>
      </div>
    </section>
  )
}
