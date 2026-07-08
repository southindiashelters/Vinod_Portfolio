import { FadeIn } from '../ui/FadeIn';

export function Scene5() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white text-black px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] text-zinc-400 uppercase bg-zinc-100 px-4 py-2 rounded-2xl sm:rounded-full inline-block">
              BUILDING MY OWN PATH
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <p className="text-xl md:text-3xl font-display font-light text-zinc-500">
              Learning wasn't enough.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} duration={0.8}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 tracking-tight">
              I wanted to build.
            </h2>
          </FadeIn>
        </div>

        {/* Action statement */}
        <FadeIn delay={0.5} duration={0.8}>
          <p className="text-lg md:text-xl font-sans text-zinc-600 font-light max-w-xl">
            So I started helping businesses.
          </p>
        </FadeIn>

        {/* Quantifiers */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl">
          {[
            'One website.',
            'One campaign.',
            'One client.',
            'One solution at a time.'
          ].map((phrase, i) => (
            <FadeIn key={phrase} delay={0.7 + i * 0.1} duration={0.6}>
              <span className="px-5 py-2.5 bg-zinc-50 border border-zinc-200 text-zinc-800 font-mono text-xs md:text-sm rounded-full shadow-sm">
                {phrase}
              </span>
            </FadeIn>
          ))}
        </div>

        {/* Professional channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl pt-4 border-t border-zinc-100">
          <FadeIn delay={1.2} duration={0.8}>
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-left">
              <span className="font-mono text-[10px] text-zinc-400 block mb-1">LOCAL IMPACT</span>
              <p className="font-display text-base md:text-lg font-semibold text-zinc-850">
                I worked with Indian SMBs.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={1.4} duration={0.8}>
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-left">
              <span className="font-mono text-[10px] text-zinc-400 block mb-1">GLOBAL COLLABORATION</span>
              <p className="font-display text-base md:text-lg font-semibold text-zinc-850">
                I also collaborated with international clients through Upwork.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Outcomes */}
        <div className="space-y-3 pt-6 w-full max-w-xl">
          <FadeIn delay={1.6} duration={0.8}>
            <p className="text-lg md:text-xl font-sans text-zinc-500 leading-relaxed">
              Every project strengthened my confidence.
            </p>
          </FadeIn>

          <FadeIn delay={1.8} duration={0.8}>
            <p className="text-xl md:text-3xl font-display font-bold text-zinc-900 tracking-tight">
              Every challenge expanded my thinking.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
