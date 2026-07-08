import { FadeIn } from '../ui/FadeIn';

export function Scene4() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black text-white px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Absolute dark ambient background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-900/10 rounded-full blur-[100px] md:blur-[140px]" />
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
              A TURNING POINT
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-xl md:text-3xl font-display font-light text-zinc-400">
              Then... <br />
              everything changed.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter text-red-500">
              COVID.
            </p>
          </FadeIn>
        </div>

        {/* Pandemic stops dreams */}
        <div className="space-y-3 max-w-xl">
          <FadeIn delay={0.5} duration={0.8}>
            <p className="text-lg md:text-xl font-sans text-zinc-300 font-light">
              The tourism industry stopped.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6} duration={0.8}>
            <p className="text-base md:text-lg font-sans text-zinc-500">
              So did our dream of building a travel business.
            </p>
          </FadeIn>
        </div>

        {/* Two Choices */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <FadeIn delay={0.8} duration={0.8}>
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
              I had two choices:
            </p>
          </FadeIn>

          <FadeIn delay={0.9} duration={0.8}>
            <p className="text-lg md:text-2xl font-display text-zinc-300 font-light">
              Wait. Or <span className="text-white font-medium">reinvent myself.</span>
            </p>
          </FadeIn>

          <FadeIn delay={1.1} duration={0.8}>
            <p className="text-base md:text-lg font-sans text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Locked down but not locked out, I dedicated every single day to mastering the mechanics of the digital world through intense, <span className="text-white font-semibold">continuous self-learning and continuous practice</span> during the COVID period.
            </p>
          </FadeIn>
        </div>

        {/* Reskilling boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl pt-2">
          {[
            { name: 'Digital Marketing', delay: 1.3 },
            { name: 'SEO', delay: 1.4 },
            { name: 'Google Ads', delay: 1.5 },
            { name: 'Meta Ads', delay: 1.6 },
            { name: 'WordPress', delay: 1.7 },
            { name: 'Figma', delay: 1.8 },
            { name: 'Social Media Optimization', delay: 1.9 },
            { name: 'Content Creation', delay: 2.0 }
          ].map((skill, i) => (
            <FadeIn key={skill.name} delay={skill.delay} duration={0.6}>
              <div className="px-4 py-4 bg-zinc-950 border border-zinc-900 rounded-2xl shadow-sm hover:border-zinc-800 transition-colors flex flex-col justify-between h-full min-h-[90px]">
                <p className="font-mono text-[9px] text-zinc-600 mb-2">SKILL 0{i+1}</p>
                <p className="font-display text-xs md:text-sm lg:text-base font-semibold text-zinc-100">
                  {skill.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rebuilding process */}
        <div className="space-y-4 pt-6 border-t border-zinc-900 w-full max-w-md mx-auto">
          <FadeIn delay={2.1} duration={0.8}>
            <div className="flex justify-center gap-4 text-xs font-mono text-zinc-500">
              <span>Self-Learning.</span>
              <span>Deliberate Practice.</span>
              <span>Daily Reinvention.</span>
            </div>
          </FadeIn>

          <FadeIn delay={2.0} duration={0.8}>
            <p className="text-lg md:text-2xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              What looked like an ending... <br />
              became a new beginning.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
