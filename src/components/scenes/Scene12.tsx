import { FadeIn } from '../ui/FadeIn';

export function Scene12() {
  const focuses = [
    "AI Products.",
    "Automation.",
    "SaaS.",
    "Digital Growth."
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black text-white px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-amber-500/10 rounded-full blur-[90px] md:blur-[130px]" />
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase bg-zinc-900 px-3.5 py-1.5 rounded-full inline-block">
              LOOKING AHEAD
            </span>
          </FadeIn>
          
          <div className="flex flex-col items-center space-y-1">
            {["I'm still learning.", "Still experimenting.", "Still building."].map((phrase, idx) => (
              <FadeIn key={phrase} delay={0.2 + idx * 0.15} duration={0.6}>
                <p className="text-xl md:text-3xl font-display font-light text-zinc-400">
                  {phrase}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Narrative transition */}
        <div className="space-y-3 max-w-xl">
          <FadeIn delay={0.8} duration={0.8}>
            <p className="text-lg md:text-2xl font-display font-light text-zinc-300">
              The next chapter isn't about a new job.
            </p>
          </FadeIn>

          <FadeIn delay={1.0} duration={0.8}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              It's about creating.
            </p>
          </FadeIn>
        </div>

        {/* Core fields list */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-xl">
          {focuses.map((item, idx) => (
            <FadeIn key={item} delay={1.2 + idx * 0.15} duration={0.6}>
              <span className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-white font-mono text-xs md:text-sm rounded-full shadow-lg hover:border-zinc-700 transition-colors">
                {item}
              </span>
            </FadeIn>
          ))}
        </div>

        {/* Concluding statement */}
        <FadeIn delay={2.0} duration={1.0}>
          <div className="pt-8 border-t border-zinc-900 w-full max-w-lg">
            <p className="text-xl md:text-3xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Technology that creates real business impact.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
